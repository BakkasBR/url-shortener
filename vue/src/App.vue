<script setup>
import UrlShortener from './components/UrlShortener.vue'
</script>

<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        URL Shortener
      </h1>
    </div>
  </header>
  <main class="grid grid-cols-2 gap-4">
    <UrlShortener />
  </main>
</template>
