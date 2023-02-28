import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { NotFound } from 'pages/NotFound/NotFound';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const MoviesPage = lazy(() => import('../pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetails/MovieDetailsPage')
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
