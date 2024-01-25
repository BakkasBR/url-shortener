<script setup>
import useShortUrls from '../composables/shorturls'
import { onMounted, watch } from 'vue';
import router from '../router'
const { shortUrls, getShortUrls, incrementVisitCount } = useShortUrls();

function handleShortUrlClick(shortUrl) {
    incrementVisitCount(shortUrl.slug)
    window.open(shortUrl.destination_url, '_blank')
}

onMounted(getShortUrls)
</script>

<template>
    <div v-for="shortUrl in shortUrls" :key="shortUrl.id" class="flex items-center justify-between py-3 border-b border-gray-300 w-76 mx-auto">
        <div class="">
            <span @click.prevent="handleShortUrlClick(shortUrl)" class="cursor-pointer">{{ "https://r.yo/" + shortUrl.slug }}</span>
        </div>
        <div>
            <span>{{ shortUrl.visits }} Visits</span>
        </div>
    </div>
</template>