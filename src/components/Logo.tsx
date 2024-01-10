import { NavLink } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';
import logo from '../assets/svg/graphql.svg';

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to={WELCOME_ROUTE} title="">
        <img className="logo__image" alt="logo" title="" src={logo} />
        <span className="logo__span">GraphiQL</span>
      </NavLink>
    </div>
  );
};

export default Logo;
