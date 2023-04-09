import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
// import shortid from 'shortid';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const filter = useSelector(getFilter);  
  const { data: contacts, isFetching } = useGetContactsQuery();

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
      {isFetching && <b className={css.Loading}>Loading contacts...</b>}
      {contacts && getFilteredContacts().map(contact => (
        <ContactsListItem key={contact.id} {...contact} /> 
      ))}     
    </ul>
  )
};

export default ContactsList;








// import ContactsListItem from '../ContactsListItem/ContactsListItem';
// import css from './ContactsList.module.css';

// const ContactsList = () => {
//   return (
//     <ul className={css.contactList}>      
//       <ContactsListItem />      
//     </ul>
//   )
// };

// export default ContactsList;