import { NavLink } from 'react-router-dom';
import { welcomePlusRu, welcomePlusEn } from '../../constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { MAIN_ROUTE } from '../../constants/route';
import { Localization } from '../../context/LocalContext';
import { useMemo } from 'react';

const Plus = () => {
  const { isVisible, titleRef } = useIntersectionObserver();
  const { translations, language } = Localization();
  const welcomePlus = useMemo(() => {
    if (language === 'ru') {
      return welcomePlusRu;
    }
    return welcomePlusEn;
  }, [language]);
  return (
    <div className={`plus ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="plus__content container">
        <h2
          className={`plus__title title-animation ${
            isVisible ? 'visible' : ''
          }`}
        >
          {translations.plusTitle}
        </h2>
        <div className="plus__description">
          {welcomePlus.label.map((item, index) => (
            <div
              key={index}
              className={`plus__item ${isVisible ? 'visible' : ''}`}
            >
              <h3>{item}</h3>
              <p>{welcomePlus.description[index]}</p>
            </div>
          ))}
        </div>
      </div>
      <NavLink to={MAIN_ROUTE}>
        <button className="button">{translations.plusBtn}</button>
      </NavLink>
    </div>
  );
};

export { Plus };
