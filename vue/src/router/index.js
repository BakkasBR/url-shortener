import {createRouter, createWebHistory} from 'vue-router'
import UrlShortener from '../components/UrlShortener.vue'
import ShortUrlsIndex from '../components/ShortUrlsIndex.vue'
import MostVisitedShortUrls from '../components/MostVisitedShorltUrls.vue'

const routes = [
    {
        path: '/short-urls',
        name: 'ShortUrls',
        component: ShortUrlsIndex,
        
    },

    {
        path: '/most-visited',
        name: 'MostVisited',
        component: MostVisitedShortUrls,
        
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router