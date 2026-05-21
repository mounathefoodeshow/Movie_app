import instance from "./axios";

export const getPopularMovies = async () => {
    const response = await instance.get('/movie/popular');
    // console.log(response.data.results);
    return response.data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}`);
    // console.log(response.data);
    return response.data;  
}
// getMovieDetails(1226863);