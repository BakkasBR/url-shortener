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

watch(() => router.params?.slug, () => {
    console.log()
    getShortUrls();
});
</script>

<template>
    <div v-for="shortUrl in shortUrls" :key="shortUrl.id" class="p-3 w-full gap-x-6">
        <a @click.prevent="handleShortUrlClick(shortUrl)">{{ "https://r.yo/" + shortUrl.slug }}</a> - Visits: {{ shortUrl.visits }}
    </div>
</template>