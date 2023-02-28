import { Link, useLocation } from 'react-router-dom';

export const GoBackButton = () => {
  const location = useLocation();
  console.log(location);
  return <Link to={location.state?.from ?? '/'}>Back to movies</Link>;
};
