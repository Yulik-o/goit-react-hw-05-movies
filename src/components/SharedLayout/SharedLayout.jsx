import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';

import { Header, StyledDiv } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <StyledDiv>
      <Header>
        <p>FilmZone</p>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          {/* <StyledLink to="/movie-details">MovieDetails</StyledLink>
          <StyledLink to="/movies/:movieId">Movie Details</StyledLink> */}
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledDiv>
  );
};
