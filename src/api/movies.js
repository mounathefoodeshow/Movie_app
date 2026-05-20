import instance from "./axios";

export const getPopularMovies = async () => {
    const response = await instance.get('/movie/popular');
    // console.log(response.data.results);
    return response.data.results;
}
