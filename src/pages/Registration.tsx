import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { AUTH_ROUTE, MAIN_ROUTE } from '../constants/route';
import { RegistrationForm } from '../components';
import { Localization } from '../context/LocalContext';
import { useAppSelector } from '../store/types';

const Registration = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { translations } = Localization();
  const location = useLocation();
  if (isAuth) {
    return <Navigate to={MAIN_ROUTE} state={{ from: location }} replace />;
  }
  return (
    <div className="container">
      <div className="authorization">
        <div className="authorization__container">
          <h1>{translations.registerTitle}</h1>
          <RegistrationForm />
        </div>
        <div className="authorization__information">
          <h4>{translations.registerSubtitle}</h4>
          <div className="authorization__login">
            {translations.registerText}
            <NavLink to={AUTH_ROUTE}>{translations.login}</NavLink>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
