import { Localization } from '../../context/LocalContext';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const GraphQL = () => {
  const { isVisible, titleRef } = useIntersectionObserver();
  const { translations } = Localization();
  return (
    <div
      className={`welcome__title ${isVisible ? 'visible' : ''}`}
      ref={titleRef}
    >
      <div className="container">
        <h1 className={`title-animation ${isVisible ? 'visible' : ''}`}>
          <span>GraphQL</span> {translations.graphqlTitle}
          <span> GraphQL</span>.
        </h1>
        <span className="welcome__description">{translations.graphqlText}</span>
        <p>{translations.graphqlDescr}</p>
      </div>
    </div>
  );
};

export { GraphQL };
