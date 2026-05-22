<template>
    <div class="max-w-6xl mx-auto px-6 py-8">
        <p v-if="store.loading" class="text-gray-400">Loading...</p>
        <p v-else-if="store.error" class="text-red-500">{{ store.error }}</p>
        <p v-else-if="store.results.length === 0 && store.query" class="text-gray-400">Any Movies Found</p>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <MovieCard v-for="movie in store.results" :key="movie.id" :movie="movie" />
        </div>
    </div>
</template>

<script setup>
import { useSearchStore } from '../stores/searchStore';
import MovieCard from '../components/MovieCard.vue';

const store = useSearchStore();
</script>