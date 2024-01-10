import { NavLink } from 'react-router-dom';
import { Logo } from '../components';
import {
  AUTH_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from '../constants/route';
import { LogOut } from '../components/Logout';
import { useAppSelector } from '../store/types';
import { useEffect, useMemo, useState } from 'react';
import { Localization } from '../context/LocalContext';
import { AuthState } from '../utils/AuthState';

const Header = () => {
  AuthState();
  const { isAuth } = useAppSelector((state) => state.user);
  const [isSticky, setIsSticky] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const { translations, language, changeLanguage } = Localization();

  const handleLanguageChange = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const viewMainLink = useMemo(() => {
    {
      if (isAuth)
        return (
          <NavLink to={MAIN_ROUTE} className="link">
            {translations.main}
          </NavLink>
        );
    }
  }, [isAuth, translations.main]);

  const viewButtons = useMemo(() => {
    {
      if (isAuth) return <LogOut />;
      return (
        <>
          <NavLink to={REGISTRATION_ROUTE} onClick={closeMenu}>
            <button className="button button-second">
              {translations.registration}
            </button>
          </NavLink>
          <NavLink to={AUTH_ROUTE} onClick={closeMenu}>
            <button className="button">{translations.login}</button>
          </NavLink>
        </>
      );
    }
  }, [isAuth, translations.login, translations.registration]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className={`header__content container`}>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__links">
          <NavLink to={WELCOME_ROUTE} className="link">
            {translations.welcome}
          </NavLink>
          {viewMainLink}
        </div>
        <div className="header__buttons">
          <span className="header__buttons-icon" onClick={toggleMenu}></span>
          <div
            className={`header__buttons-list ${menuVisible ? 'active' : ''}`}
          >
            {viewButtons}
          </div>
          <div className="language">
            <input
              type="checkbox"
              id="switch"
              className="language__input"
              defaultChecked={language === 'ru'}
              onChange={(e) => {
                if (e.target.checked) {
                  handleLanguageChange('ru');
                } else {
                  handleLanguageChange('en');
                }
              }}
            />
            <label htmlFor="switch" className="language__toggler">
              <span className="language__ru">{translations.ru}</span>
              <span className="language__en">{translations.en}</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
