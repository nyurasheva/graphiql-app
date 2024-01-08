import { NavLink } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import dog from '../../assets/img/dog.png';
import { MAIN_ROUTE } from '../../constants/route';
import { Localization } from '../../context/LocalContext';

const Dog = () => {
  const { isVisible, titleRef } = useIntersectionObserver();
  const { translations } = Localization();
  return (
    <div className={`dog ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="dog__content container">
        <div className={`dog__img ${isVisible ? 'visible' : ''}`}>
          <img src={dog} alt="Dog" />
        </div>
        <div className="dog__description">
          <h2
            className={`dog__title title-animation ${
              isVisible ? 'visible' : ''
            }`}
          >
            {translations.dogTitle}
          </h2>
          <p>
            {translations.dogText1}
            <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
              RS School.
            </a>
          </p>
          <p>{translations.dogText2}</p>
          <div className="dog__buttons">
            <NavLink to={MAIN_ROUTE}>
              <button className="button button-transparent">
                {translations.dogBtn}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dog };
