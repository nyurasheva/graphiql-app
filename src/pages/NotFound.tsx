import { NavLink } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';
import { Localization } from '../context/LocalContext';

const NotFound = () => {
  const { translations } = Localization();
  return (
    <div className="container">
      <div className="exception">
        <div className="exception__code">
          404
          <span className="exception__code-txt">
            {translations.notfoundText}
          </span>
        </div>
        <div className="exception__title-info">
          <h1 className="exception__title">{translations.notfoundTitle}</h1>
          <p className="exception__info">{translations.notfoundInfo}</p>
          <div className="exception__links">
            <div className="exception__links-item">
              <NavLink
                to={WELCOME_ROUTE}
                title=""
                className="exception__links-a"
              >
                {translations.notfoundLink}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
