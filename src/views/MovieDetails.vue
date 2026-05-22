<template>
    <div v-if="movie" class="max-w-4xl mx-auto p-8">
        <div class="flex gap-8">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="w-60 rounded-xl shadow-lg" />
            <div class="flex flex-col gap-1">
                <h1 class="font-bold  text-blue-600">{{ movie.title }}</h1>
                <p class="font-bold text-red-500">{{ movie.release_date }}</p>
                <p class="font-bold text-yellow-500">{{ movie.vote_average }}</p>   
                <div class="flex flex-wrap gap-2">
                    <span v-for="genre in movie.genres" :key="genre.id"
                        class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {{ genre.name }}
                    </span>
                </div>
                <p class="font-bold text-gray-950 leading-relaxed">{{ movie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieDetails } from '../api/movies'

const route = useRoute()
const movie = ref(null)

onMounted(async () => {
    try {
        movie.value = await getMovieDetails(route.params.id)
    } catch (error) {
        console.error('Error dans le chargement',error)
    }
})

</script>

<style scoped></style>