import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Component {...routeProps} /> : <Navigate to="/login" />;
};

export default PrivateRoute;