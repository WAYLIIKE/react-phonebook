import { useEffect } from 'react';
import css from './Contacts.module.css';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { ContactList } from '../../components/ContactList/ContactList';
import { EmptyContacts } from '../../components/EmptyContacts/EmptyContacts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { Watch } from 'react-loader-spinner';
import {
  selectContacts,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/selectors';
import { Helmet } from 'react-helmet-async';

export default function Contacts() {
  const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const visibleUsers = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {(users.length === 0 || visibleUsers.length === 0) && <EmptyContacts />}
      {loading && (
        <Watch
          visible={true}
          height="120"
          width="120"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
        />
      )}
      <div className={loading ? css.overlay : css.none}></div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
    </div>
  );
}
