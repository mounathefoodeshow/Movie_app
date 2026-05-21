import { defineStore } from 'pinia';
import { searchMovies } from '../api/movies';
import { ref, watch } from 'vue';

export const useSearchStore = defineStore('search', () => {
    const query = ref('')
    const results = ref([])
    const loading = ref(false)
    const error = ref(null)

    watch(query, async (newQuery) => {
        if (!newQuery) {
            results.value = await getPopularMovies();
            return
        }
        loading.value = true
        error.value = null
        try {
            results.value = await searchMovies(newQuery)
        } catch (error) {
            error.value = 'Error in searching'
        } finally {
            loading.value = false
        }
    })

    return { query, results, loading, error }
})