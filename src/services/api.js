import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=58100b962b8f017dc01cc98365b716db`
  );
  return data.results;
};
export const requestMovieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=58100b962b8f017dc01cc98365b716db`
  );
  return data;
};

export const requestSearchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=58100b962b8f017dc01cc98365b716db&query=${query}`
  );
  return data.results;
};

export const requestMovieCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=58100b962b8f017dc01cc98365b716db`
  );
  return data;
};

export const requestMovieReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=58100b962b8f017dc01cc98365b716db`
  );
  return data;
};
