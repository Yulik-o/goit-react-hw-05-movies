import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const response = await requestMovieReviews(movieId);
        setReviews([...response]);
      } catch (error) {
        console.log(error.message);
        setReviews([]);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return [...reviews].length > 0 ? (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(el => (
          <li key={el.id}>
            <h4>Author: {el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h4>There are no reviews for this movie.</h4>
  );
};
