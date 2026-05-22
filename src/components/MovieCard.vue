<template>
    <div class="bg-[#1a1a2e] rounded-xl overflow-hidden">
        <div class="relative">
            <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" class="w-full h-56 object-cover" />
            <span
                class="absolute top-2 right-2 flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                {{ movie.vote_average.toFixed(1) }}
            </span>
        </div>
        <div class="p-3 flex flex-col gap-2">
            <p class="text-white text-sm font-medium truncate">{{ movie.title }}</p>
            <router-link :to="`/movie/${movie.id}`"
                class="flex items-center justify-center w-full py-2 rounded-lg bg-white/10 text-gray-300 text-xs no-underline">
                Details
            </router-link>
            <div class="flex gap-2">
                <button @click="addFavorite(movie)"
                    class="flex-1 py-2 rounded-lg bg-green-100 text-green-800 text-xs font-medium"
                    v-if="showAddButton">
                    Add Favorite
                </button>
                <button @click="removeFavorite(movie.id)"
                    class="flex-1 py-2 rounded-lg bg-red-100 text-red-800 text-xs font-medium"
                    v-if="showRemoveButton">
                    Remove Favorite
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favoritesStore';

const store = useFavoritesStore();

const { addFavorite, removeFavorite } = store;

defineProps({
    movie: Object,
    showAddButton: {
        type: Boolean,
        default: true
    },
    showRemoveButton: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped></style>