const API_KEY = "2ed895cacd162a47c0a7e524cbb15b43";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await responce.json()
    return data.results
}

export const searchMovies = async (query) => {
    const responce = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
    const data = await responce.json()
    return data.results;
}