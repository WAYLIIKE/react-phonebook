import css from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { LuKeyRound } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/authOps';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid.')
      .matches('^(?!.*@[^,]*,)', 'Invalid email.')
      .required('Email is required.'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
  });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign in to Phonebook</h2>
      <p className={css.text}>Use your email account:</p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          dispatch(logIn(values));
          action.resetForm();
        }}
        validationSchema={loginSchema}
      >
        <Form className={css.wrapper}>
          <div className={css.formWrapper}>
            <Field
              type="email"
              name="email"
              className={css.field}
              placeholder={`Email`}
            ></Field>
            <MdOutlineEmail className={css.icon} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.formWrapper}>
            <Field
              type="password"
              name="password"
              className={css.field}
              placeholder={`Password`}
            ></Field>
            <LuKeyRound className={css.icon} />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>
          <button className={css.button} type="submit">
            sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
};
