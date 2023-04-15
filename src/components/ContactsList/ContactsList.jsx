import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getFilter } from 'redux/filterSlice';
import css from './ContactsList.module.css';

const ContactsList = () => {  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(getFilter);  
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {        
    const normalizedFilter = filter.toLowerCase();
    
    if (contacts) {
      return contacts.filter(contact => 
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };  

  return (
    <ul className={css.contactList}>
      {isLoading && <b className={css.Loading}>Loading contacts...</b>}
      {contacts && getFilteredContacts().map(contact => (
        <ContactsListItem key={contact.id} {...contact} /> //
      ))}     
    </ul>
  )
};

export default ContactsList;