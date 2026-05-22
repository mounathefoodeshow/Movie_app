import instance from "./axios";

export const getPopularMovies = async () => {
    const response = await instance.get('/movie/popular');
    return response.data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data;  
}

export const searchMovies = async (query) => {
    const response = await instance.get('/search/movie', {
        params: { query }
    });
    return response.data.results;
}


