<template>
    <nav>
        <RouterLink to="/"> Home</RouterLink>
        <RouterLink to="/movies"> Movies</RouterLink>
        <RouterLink to="/actors"> Actors</RouterLink>
    </nav>
</template>

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