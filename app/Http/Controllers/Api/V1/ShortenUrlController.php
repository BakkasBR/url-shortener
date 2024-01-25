<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\ShortUrl;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ShortenUrlController extends Controller
{
    public function shorten(Request $request)
    {
        $request->validate([
            'destination_url' => 'required|url',
        ]);

        $slug = self::generateUniqueSlug();

        $url = ShortUrl::create([
            'destination_url' => $request->destination_url,
            'slug' => $slug,
        ]);

        return response()->json($url);
    }

    public function index()
    {
        $urls = ShortUrl::all();
        return response()->json($urls);
    }

    public function mostVisitedUrls($limit = 3)
    {
        $mostVisitedUrls = ShortUrl::orderBy('visits', 'desc')
            ->take($limit)
            ->get();

        return response()->json($mostVisitedUrls);
    }

    public function incrementUrlVisits(string $slug)
    {
        $shortUrl = ShortUrl::where('slug', $slug)->first();

        if ($shortUrl) {
            $shortUrl->increment('visits');
            return response()->json(['success' => 'visits incremented'], 200);
        }

        return response()->json(['error' => 'url does not exist'], 400);
    }

    private static function generateUniqueSlug($length = 6)
    {
        $slug = Str::random($length);

        //generate a new slug if it alredy exists
        while (ShortUrl::where('slug', $slug)->exists()) {
            $slug = Str::random($length);
        }

        return $slug;
    }
}
