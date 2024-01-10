import { aboutDataRu, aboutDataEn } from '../../constants';
import lineSVG from '../../assets/svg/line.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Localization } from '../../context/LocalContext';
import { useMemo } from 'react';

const About = () => {
  const { isVisible, titleRef } = useIntersectionObserver();
  const { language, translations } = Localization();
  const aboutData = useMemo(() => {
    if (language === 'ru') {
      return aboutDataRu;
    }
    return aboutDataEn;
  }, [language]);
  return (
    <div className={`about ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="about__content">
        <h2
          className={`about__title title-animation ${
            isVisible ? 'visible' : ''
          }`}
        >
          {translations.aboutTitle}
        </h2>
        <div className="container">
          {aboutData.map((item, index) => (
            <div
              className={`about__item ${isVisible ? 'visible' : ''}`}
              key={index}
            >
              <div className={`about__images ${isVisible ? 'visible' : ''}`}>
                <img className="about__img" src={item.img} alt={item.title} />
              </div>
              <div
                className={`about__descriptions ${isVisible ? 'visible' : ''}`}
              >
                <h3 className="about__subtitle">{item.title}</h3>
                <p>{item.description}</p>
                <div className="about__number">{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about__svg">
        <img src={lineSVG} alt="Line" />
      </div>
    </div>
  );
};

export { About };
