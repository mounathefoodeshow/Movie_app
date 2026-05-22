<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4 text-white">My Favorite Movies</h1>
        <div v-if="favorites.length === 0" class="text-gray-400">No favorite movies yet.</div>
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <MovieCard v-for="movie in favorites" :key="movie.id" :movie="movie" :showAddButton="false" :showRemoveButton="true"/>
        </div>  
    </div>  
</template>

<script setup>
import { useFavoritesStore } from '../stores/favoritesStore';
import MovieCard from '../components/MovieCard.vue';
import { storeToRefs } from 'pinia';

const store = useFavoritesStore();
const { favorites } = storeToRefs(store);
</script>