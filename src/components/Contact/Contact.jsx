import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { useState } from 'react';
import { ContactModal } from '../ContactModal/ContactModal';

export const Contact = ({ data: { name, number, id } }) => {
  const dispath = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(prevValue => !prevValue);
  }

  return (
    <li className={css.container}>
      <div
        className={css.item}
        onClick={() => {
          toggleModal();
        }}
      >
        <div className={css.values}>
          <p>
            <FaUser />
            <span className={css.info}>{name}</span>
          </p>
          <p>
            <BsFillTelephoneFill />
            <span className={css.info}>{number}</span>
          </p>
        </div>
        <button
          className={css.button}
          type="button"
          onClick={evt => {
            evt.stopPropagation();
            dispath(deleteContact(id));
          }}
        >
          <MdDeleteForever size={25} attributeName="deleteButton" />
        </button>
      </div>
      <ContactModal
        name={name}
        number={number}
        id={id}
        onOpen={modalIsOpen}
        handleModal={toggleModal}
      />
    </li>
  );
};
