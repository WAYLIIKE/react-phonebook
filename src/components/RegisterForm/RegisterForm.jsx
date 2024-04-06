import css from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { LuKeyRound } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOps';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 symbols.')
      .max(20, 'Max length is 20.')
      .required('Name is required.'),
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
      <h2 className={css.title}>Create Account</h2>
      <p className={css.text}>Use your email for registration:</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          dispatch(register(values));
          action.resetForm();
        }}
        validationSchema={registerSchema}
      >
        <Form className={css.wrapper}>
          <div className={css.formWrapper}>
            <Field
              type="text"
              name="name"
              className={css.field}
              placeholder={`Name`}
            ></Field>
            <FaRegUser className={css.icon} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
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
            sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};
