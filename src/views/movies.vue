<template>
    <div>
        <h1> trending movies </h1>
        <div class="grid">
            <MovieCard v-for="movie in movies" :movie="movie" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPopularMovies } from '../api/movies'
import MovieCard from '../components/MovieCard.vue'

const movies = ref([])

onMounted(async () => {
    movies.value = await getPopularMovies()
})
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
</style>