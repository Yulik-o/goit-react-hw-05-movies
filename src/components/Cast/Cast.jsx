import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCast } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const response = await requestMovieCast(movieId);
        setCast([...response.cast]);
      } catch (error) {
        console.log(error.message);
        setCast([]);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {Array.isArray(cast) &&
          cast.map(person => (
            <li key={person.id}>
              {Boolean(person.profile_path) && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path} `}
                  alt={person.name}
                />
              )}
              <h4>{person.name}</h4>
              <p>Character: {person.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
