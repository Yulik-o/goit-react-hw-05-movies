import { StyledLink } from "components/App.styled";
//import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

export const MovieDetailsPage = () =>{
    const { movieId } = useParams();
    // const [cast, setCast] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    // const [reviews, setReviews] = useState(null)
    // const [error, setError] = useState(null)
    

    return (
        <div>
        <div>{movieId}</div>
        <h3>Additional information</h3>
        <ul>
            <li>
                <StyledLink to="cast">Cast</StyledLink>
                {/* {Boolean(cast) && <div></div>} */}
                
            </li>
            <li><StyledLink to="reviews">Reviews</StyledLink></li>
        </ul>
        <Outlet />
        </div>
    )
}