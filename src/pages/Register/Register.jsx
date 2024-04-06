import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import css from './Register.module.css';
import { RegisterBox } from '../../components/RegisterBox/RegisterBox';

export default function Register() {
  return (
    <section>
      <div className={css.container}>
        <RegisterBox />
        <RegisterForm />
      </div>
      <Helmet>
        <title>Register</title>
      </Helmet>
    </section>
  );
}
