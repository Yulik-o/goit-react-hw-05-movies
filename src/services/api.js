import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
//const API_KEY = 'b72e97d50f503cf310444389e0d21ec6';

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    `trending/movie/day?key=b72e97d50f503cf310444389e0d21ec6&page=${1}`
  );
  return data.results;
};
