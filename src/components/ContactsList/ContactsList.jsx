import ContactsListItem from '../ContactsListItem/ContactsListItem';
import css from './ContactsList.module.css';

const ContactsList = () => {
  return (
    <ul className={css.contactList}>      
      <ContactsListItem />      
    </ul>
  )
};

export default ContactsList;