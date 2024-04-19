// News API Service
import axios from 'axios';
/*
const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/name/peru'
});*/

export class FakeStoreApi {
    // methods

    getAll() {
        return axios.get('https://restcountries.com/v3.1/name/peru')
    }


    /*
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }*/
}

