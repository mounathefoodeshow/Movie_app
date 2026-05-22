<template>
    <nav>
        <RouterLink to="/"> Home</RouterLink>
        <RouterLink to="/movies"> Movies</RouterLink>
        <RouterLink to="/favorites"> Favorites</RouterLink>
        <input v-model="store.query" @focus="$router.push('/search')" type="text" placeholder="Search a movie..."
            class="px-1 py-1 rounded-lg bg-gray-800 text-white placeholder-gray-400 w-64 focus:outline-none" />
    </nav>
</template>
<script setup>
import { useSearchStore } from '../stores/searchStore';
const store = useSearchStore();
</script>

<style scoped>
nav {
    display: flex;
    gap: 20px;
    background-color: #0a4b6c;
    padding: 10px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}
</style>