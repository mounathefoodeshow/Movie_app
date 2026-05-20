import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    timeout: 10000,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: 'fr-FR',
    },
})

export default instance