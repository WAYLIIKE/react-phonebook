import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { buildNavLinkClass } from '../helpers/builder';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.wrapper}>
      <NavLink to="/" className={buildNavLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildNavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
