import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
    },
    {
        path : '/movies',
        component: () => import('../views/movies.vue'),
    },
    {
        path : '/movie/:id',
        component: () => import('../views/MovieDetails.vue'),
    },
    {
        path : '/search',
        component: () => import('../views/SearchResults.vue'),
    },
    {
        path : '/favorites',
        component: () => import('../views/Favorites.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router