<script setup>
import { onMounted } from 'vue';
import useShortUrls from '../composables/shorturls';

const { mostVisitedUrls, getMostVisitedUrls} = useShortUrls();

onMounted(getMostVisitedUrls)
</script>

<template>
    <div v-for="shortUrl in mostVisitedUrls" :key="shortUrl.id" class="flex items-center justify-between py-3 border-b border-gray-300 w-76 mx-autos">
        <div class="">
            <span >{{ "https://r.yo/" + shortUrl.slug }}</span>
        </div>
        <div>
            <span>{{ shortUrl.visits }} Visits</span>
        </div>
    </div>
</template>