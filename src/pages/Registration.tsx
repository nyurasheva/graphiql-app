import { NavLink } from 'react-router-dom';
import { RegistrationForm } from '../components';
import { AUTH_ROUTE } from '../constants/route';
import { Localization } from '../context/LocalContext';

const Registration = () => {
  const { translations } = Localization();
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
