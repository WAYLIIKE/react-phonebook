import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';
import { LoginBox } from '../../components/LoginBox/LoginBox';

export default function Login() {
  return (
    <section>
      <div className={css.container}>
        <LoginForm />
        <LoginBox />
      </div>
      <Helmet>
        <title>Login</title>
      </Helmet>
    </section>
  );
}
