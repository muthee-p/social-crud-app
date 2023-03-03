import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function withAuth(Component) {
  return function WithAuth(props) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
