import { useDispatch, useSelector } from 'react-redux';
import { getContacts, delContact, getFilter } from '../../redux/contactsSlice';
import shortid from 'shortid';
import css from './ContactsListItem.module.css';

const ContactsListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);  
  const filter = useSelector(getFilter);  

  const getFilteredContacts = () => {        
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {getFilteredContacts().map((contact) => (
        <li
          key={shortid.generate()}
          className={css.contactListItem}
        >
          <p>{contact.name}: {contact.number}</p>
          <button onClick={() => dispatch(delContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  )  
};

export default ContactsListItem;