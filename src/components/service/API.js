import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '927b7735e8c7db5d43dd9f92192df314';


export const getTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    console.log(data);
    return data.results;
};


// export const getDetailsMovies = async (id) => {
//     const {data} = await axios.get(`/movies/get-movie-details?api_key=${API_KEY}&movieId=${id}`);
//     console.log(data);
//     return data;
// }

export const getDetalisMovies = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
console.log(data);
  return data;
};