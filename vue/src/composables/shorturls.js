import axios from 'axios';
import { reactive, toRefs } from 'vue';

const axiosClient = axios.create({
    baseURL: 'https://url-shortener.test/api/v1',
});

const state = reactive({
    shortUrls: [],
    mostVisitedUrls: [],
    visitCount: 0
})

export default function useShortUrls() {

    const getShortUrls = () => {
        axiosClient
            .get('/short-urls')
            .then((response) => {
                console.log(response)
                state.shortUrls = response.data;
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const getMostVisitedUrls = () => {
        axiosClient
            .get('/most-visited')
            .then((response) => {
                state.mostVisitedUrls = response.data;
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const storeShortUrl = (urlData) => {
        axiosClient.post('/shorten-url', urlData)
            .then( response => {
                state.shortUrls.push(response.data)
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    const incrementVisitCount = (slug) => {
        console.log(slug);
        axiosClient
            .put('/short-url/' + slug)
            .then(() => {
                // Success, do something if needed
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    return {
        ...toRefs(state),
        getShortUrls,
        getMostVisitedUrls,
        storeShortUrl,
        incrementVisitCount,
    };
}
