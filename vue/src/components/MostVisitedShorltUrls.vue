<script setup>
import { onMounted } from 'vue';
import useShortUrls from '../composables/shorturls';

const { mostVisitedUrls, getMostVisitedUrls} = useShortUrls();

onMounted(getMostVisitedUrls)
</script>

<template>
    <div v-for="shortUrl in mostVisitedUrls" :key="shortUrl.id" class="p-3 w-full gap-x-6">
        <span>{{ "https://r.yo/" + shortUrl.slug }} - Visits: {{ shortUrl.visits }} </span>
    </div>
</template>