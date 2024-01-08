import { developersEn } from '../constants/developers';
import { WELCOME_ROUTE } from '../constants/route';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__content">
        <a
          className="footer__rss-link"
          href="https://rs.school/react/"
          target="_blank"
          rel="noreferrer"
        >
          <svg className="footer__svg"></svg>
        </a>
        <div className="footer__gh">
          {developersEn.map((developer, index) => (
            <a
              key={index}
              className="footer__gh-link"
              href={`https://github.com/${developer.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="footer__svg"></svg>
            </a>
          ))}
        </div>
        <div className="footer__year-link">
          <span>@Copyright {new Date().getFullYear()}</span>{' '}
          <a href={WELCOME_ROUTE}>GraphiQL</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
