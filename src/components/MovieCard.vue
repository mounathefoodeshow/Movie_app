<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" />
        <h3>{{ movie.title }}</h3>
        <p> {{ movie.vote_average }}</p>
    </div>
</template>

<script setup>
defineProps({
    movie: Object,
})
</script>

<style scoped>
.card {
    background: #000000;
    color: white;
    text-align: center;
}

img {
    width: 100%;
}

h3 {
    padding: 0.9rem;
    font-size: 0.9rem;
}
</style>