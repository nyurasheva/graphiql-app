import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { MAIN_ROUTE, REGISTRATION_ROUTE } from '../constants/route';
import { LoginForm } from '../components';
import { Localization } from '../context/LocalContext';
import { useAppSelector } from '../store/types';

const Login = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { translations } = Localization();
  const location = useLocation();
  if (isAuth) {
    return <Navigate to={MAIN_ROUTE} state={{ from: location }} replace />;
  }
  return (
    <>
      <div className="container">
        <div className="authorization">
          <div className="authorization__container">
            <h1>{translations.loginTitle}</h1>
            <LoginForm />
          </div>
          <div className="authorization__information">
            <h4>{translations.loginSubtitle}</h4>
            <p className="white">{translations.loginText}</p>
            <NavLink to={REGISTRATION_ROUTE}>
              {translations.registerTitle}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
