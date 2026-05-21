<template>
    <div class="bg-[#1a1a2e] rounded-lg overflow-hidden text-white text-center">
        <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" class="w-full h-auto"/>
        <h3 class="p-1 text-sm">{{ movie.title }}</h3>
        <p class="p-1"> {{ movie.vote_average }}</p>
        <router-link :to="`/movie/${movie.id}`" class="inline-block mx-2 my-2 px-4 py-2 bg-blue-500 text-white rounded text-sm no-underline">Details</router-link>  
    </div>
</template>

<script setup>
defineProps({
    movie: Object,
})
</script>

<style scoped>
</style>