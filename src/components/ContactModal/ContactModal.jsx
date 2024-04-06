import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { CiSettings } from 'react-icons/ci';
import Modal from 'react-modal';
import css from './ContactModal.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { patchContact } from '../../redux/contacts/contactsOps';

export const ContactModal = ({ name, number, id, onOpen, handleModal }) => {
  const inputNameId = useId();
  const inputPhoneId = useId();
  const dispath = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 symbols')
      .max(20, 'Max length is 20')
      .required('Name is required'),
    number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8, 'Number must be at least 8 symbols')
      .required('A phone number is required'),
  });

  return (
    <div>
      <Modal
        isOpen={onOpen}
        onRequestClose={handleModal}
        ariaHideApp={false}
        className={css.modal}
        style={{
          overlay: {
            backgroundColor: 'rgb(73 73 73 / 65%)',
          },
        }}
      >
        <TfiClose className={css.buttonClose} onClick={handleModal} size={18} />
        <Formik
          initialValues={{ name, number }}
          onSubmit={values => {
            dispath(patchContact([id, { ...values }]));
          }}
          validationSchema={contactSchema}
        >
          <Form className={css.form}>
            <label className={css.label} htmlFor={inputNameId}>
              Change contact name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={inputNameId}
              autoComplete={name}
            ></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
            <label className={css.label} htmlFor={inputPhoneId}>
              Change contact number
            </label>
            <Field
              className={css.field}
              type="tel"
              name="number"
              id={inputPhoneId}
              autoComplete="rqwrqw"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
            <button className={css.button} type="submit">
              Save
            </button>
          </Form>
        </Formik>
        <CiSettings className={css.background} size={500} />
      </Modal>
    </div>
  );
};
