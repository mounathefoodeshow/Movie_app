import { defineStore } from 'pinia';
import { ref,computed,watch} from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref([]);
    if(localStorage.getItem('favorites')) {
        favorites.value = JSON.parse(localStorage.getItem('favorites'))
    }
    watch(favorites, (newFavorites) => {
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }, { deep: true ,flush:'sync'})

    function addFavorite(movie) {
        if (!favorites.value.find(fav => fav.id === movie.id)) {
            favorites.value.push(movie)
            // console.log(favorites.value);
        }
    }
    function removeFavorite(movieId) {
        favorites.value = favorites.value.filter(fav => fav.id !== movieId)
        localStorage.setItem('favorites', JSON.stringify(favorites.value)) 
        // console.log(favorites.value);
    }
    return { favorites, addFavorite, removeFavorite }
})


