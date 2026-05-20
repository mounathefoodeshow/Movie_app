const axios = require("axios");

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: 'fr-FR',
    },
})

export default apiClient