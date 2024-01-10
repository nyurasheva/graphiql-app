import { Navigate, useLocation } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { Loader } from './Loader';

const AuthRequired = ({ children }: { children: JSX.Element }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to={WELCOME_ROUTE} state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRequired;
