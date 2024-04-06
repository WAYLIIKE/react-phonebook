import { buildNavLinkClass } from '../helpers/builder';
import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={buildNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildNavLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
