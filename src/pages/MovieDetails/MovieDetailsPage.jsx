import { StyledLink } from 'components/App.styled';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { useEffect, useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { requestMovieDetails } from 'services/api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    async function getMovieItem() {
      try {
        const response = await requestMovieDetails(movieId);
        setMovieData({ ...response });
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieItem();
  }, [movieId]);

  return (
    <>
      <div>
        <GoBackButton />
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path} `}
            alt="movieData.title"
          />
        </div>
        <h2>
          {movieData.title}
          <span>({movieData.release_date})</span>
        </h2>
        <p>User score: {movieData.vote_average}</p>
        <h3>Overview</h3>
        <p>{movieData.overview}</p>
        <h3>Genres</h3>
        <p>
          {movieData.genres &&
            movieData.genres.map(el => `${el.name}`).join(', ')}
        </p>
      </div>

      <h3>Additional information</h3>
      <ul>
        <li>
          <StyledLink state={location.state} to="cast">
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink state={location.state} to="reviews">
            Reviews
          </StyledLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
