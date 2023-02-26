import { StyledLink } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <h2>FilmZone</h2>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          <StyledLink to="/movie-details">MovieDetails</StyledLink>
          <StyledLink to="/movies/:movieId">Movie Details</StyledLink>
        </nav>
      </Header>
      <Outlet/>
    </Container>
  );
};
