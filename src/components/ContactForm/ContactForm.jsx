import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegUser } from 'react-icons/fa6';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

export const ContactForm = () => {
  const dispath = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 symbols.')
      .max(20, 'Max length is 20.')
      .required('Name is required.'),
    number: Yup.string()
      .matches(/^\+?[1-9][0-9]*$/, "That doesn't look like a phone number.")
      .min(8, 'Number must be at least 8 symbols.')
      .max(20, 'Max length is 20.')
      .required('A phone number is required.'),
  });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Add new contact</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, action) => {
          dispath(addContact(values));
          action.resetForm();
        }}
        validationSchema={contactSchema}
      >
        <Form>
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
              className={css.field}
              type="tel"
              name="number"
              placeholder={`Number`}
            ></Field>
            <BsTelephone className={css.icon} />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
