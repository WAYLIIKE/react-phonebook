import { NavLink } from 'react-router-dom';
import css from './RegisterBox.module.css';

export const RegisterBox = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Welcome Back!</h2>
      <p className={css.text}>
        To keep connected with us please login with your personal info
      </p>
      <button className={css.button}>
        <NavLink to="/login" className={css.link}>
          sign in
        </NavLink>
      </button>
    </div>
  );
};
