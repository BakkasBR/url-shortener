import axios from 'axios'
import {ref} from 'vue'

const axiosClient = axios.create({
    baseURL: 'https://url-shortener.test/api/v1'
})

export default function useShortUrls() {
    const shortUrls = ref([]);
    const mostVisitedUrls = ref([]);

    const getShortUrls = () => {
        axiosClient.get('/short-urls')
            .then(response => {
                shortUrls.value = response.data;
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    const getMostVisitedUrls = () => {
        axiosClient.get('/most-visited')
            .then(response => {
                mostVisitedUrls.value = response.data;
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    const storeShortUrl = (urlData) => {
        axiosClient.post('/shorten-url', urlData)
            .then(() => {
                //
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    const incrementVisitCount = (slug) => {
        console.log(slug)
        axiosClient.put('/short-url/' + slug)
            .then(() => {
                // Success, do something if needed
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    return {
        shortUrls,
        getShortUrls,
        mostVisitedUrls,
        getMostVisitedUrls,
        storeShortUrl,
        incrementVisitCount,
    }
}