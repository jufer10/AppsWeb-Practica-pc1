// News API Service

import axios from 'axios';
import {LogoApiService} from "../../shared/services/logo-api.service.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2'
});

export class NewsApiService {
    apiKey = '5f03fb2cafc74d81972c361ae5d519ca';
    logoApi = new LogoApiService();

    // methods

    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}

