import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
//const API_KEY = '58100b962b8f017dc01cc98365b716db';

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?key=58100b962b8f017dc01cc98365b716db&page=${1}`
  );
  return data.results;
};
