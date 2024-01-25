<script setup>
import { reactive, ref } from 'vue';
import useShortUrls from '../composables/shorturls'
import router from '../router'

const { storeShortUrl } = useShortUrls()
const shortUrl = reactive({
    destination_url: ''
})

const shortenUrl = () => {
    storeShortUrl({ ...shortUrl })
    shortUrl.destination_url = ''

    //router.push({ name: 'ShortUrls', query: { slug:  shortUrl.slug} });
}

</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Shorten a long URL</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="shortenUrl">
                <div>
                    <label for="destination_url" class="block text-sm font-medium leading-6 text-gray-900">Enter a Long
                        Link</label>
                    <div class="mt-2">
                        <input id="destination_url" name="destination_url" type="text" required=""
                            v-model="shortUrl.destination_url"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Shorten</button>
                </div>
            </form>
        </div>
    </div>
    <div class="w-full px-6 py-12 lg:px-8">
        <div>
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex space-x-4">
                        <router-link to="/short-urls" active-class="" :class="[
                            this.$route.path === '/most-visited'
                                ? ''
                                : 'text-center block border border-blue-500 rounded py-2 px-4 bg-indigo-600 hover:bg-indigo-400 text-white',
                            'text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4',
                        ]">
                            Recent Urls
                        </router-link>
                        <router-link to="/most-visited" active-class="" :class="[
                            this.$route.path ==='/short-urls'
                                ? ''
                                : 'text-center block border border-blue-500 rounded py-2 px-4 bg-indigo-600 hover:bg-indigo-400 text-white',
                            'text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4',
                        ]">
                            Most Visited
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2 ">
            <router-view />
        </div>
    </div>
</template>