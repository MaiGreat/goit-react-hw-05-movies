import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '927b7735e8c7db5d43dd9f92192df314';


export const getTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return data.results;
};


export const getDetalisMovies = async id => {
    const { data } = await axios.get(
        `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
};

export const getCastMovies = async id => {
        const { data } = await axios.get(
        `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
}

export const getRewiewsMovies = async id => {
    const { data } = await axios.get(
        `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    )
    return data;
}

export const getMovieByQuery = async query => {
    const { data } = await axios.get(
        `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );

    return data.results;
};