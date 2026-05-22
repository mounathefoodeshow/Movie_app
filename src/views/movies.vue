<template>
    <div>
        <h1> trending movies </h1>
        <div class="grid">
            <MovieCard v-for="movie in filtredMovies" :movie="movie" :showAddButton="true" :showRemoveButton="false"/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue'
import { getPopularMovies } from '../api/movies'
import MovieCard from '../components/MovieCard.vue'
import { useFavoritesStore } from '../stores/favoritesStore'

const store = useFavoritesStore()
const movies = ref([])

const filtredMovies = computed(() => {
    return movies.value.filter(movie => !store.favorites.find(fav => fav.id === movie.id))
})

onMounted(async () => {
    movies.value = await getPopularMovies()
})
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
</style>