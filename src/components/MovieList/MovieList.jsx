import { Link, useLocation } from 'react-router-dom';

export function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
