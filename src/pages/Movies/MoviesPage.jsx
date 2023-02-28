import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestSearchMovies } from 'services/api';
import { StyledButton, StyledForm } from './MoviesPageStyled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const submittedQuery = searchParams.get('query');
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieByQuery = async () => {
      const result = await requestSearchMovies(submittedQuery);
      setMovies(result);
    };
    getMovieByQuery();
  }, [submittedQuery]);

  const onInputChange = event => {
    setQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    setSearchParams({ query });
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={query}
          onChange={onInputChange}
          placeholder="Movie search"
          autoComplete="off"
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>

      <MovieList movies={movies} />
    </>
  );
};
export default MoviesPage;
