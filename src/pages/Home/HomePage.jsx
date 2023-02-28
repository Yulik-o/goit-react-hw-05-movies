import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { requestTrendingMovies } from 'services/api';
import { StyledH3 } from './Home.styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const movies = await requestTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <>
      <StyledH3>Trending today</StyledH3>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </>
  );
};
export default HomePage;
