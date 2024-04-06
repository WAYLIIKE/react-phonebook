import { NavLink } from 'react-router-dom';
import css from './LoginBox.module.css';

export const LoginBox = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Hello, Friend!</h2>
      <p className={css.text}>
        Enter your personal details and start journey with us
      </p>
      <button className={css.button}>
        <NavLink to="/register" className={css.link}>
          sign up
        </NavLink>
      </button>
    </div>
  );
};
