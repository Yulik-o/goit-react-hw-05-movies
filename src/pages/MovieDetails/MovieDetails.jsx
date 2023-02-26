import { StyledLink } from "components/App.styled";
import { Outlet, useParams } from "react-router-dom";

export const MovieDetails = () =>{
    const { movieId } = useParams();
    return (
        <div>
        <div>{movieId}</div>
        <h3>Additional information</h3>
        <ul>
            <li>
                <StyledLink to="cast">Cast</StyledLink>
                
            </li>
            <li><StyledLink to="reviews">Reviews</StyledLink></li>
        </ul>
        <Outlet />
        </div>
    )
}