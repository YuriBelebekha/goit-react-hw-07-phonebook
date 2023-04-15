import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';
import css from './ContactsListItem.module.css';

const ContactsListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const deleteContactData = () => dispatch(deleteContact(id));
  const isLoading = useSelector(selectIsLoading); 

  const onClickDeleteContact = () => {    
    setTimeout(() => {
      toast.info(`Contact ${name.toUpperCase()} was deleted`, ToastOptions)
    }, 1000);
    deleteContactData(id);    
  };
  
  return (    
    <li className={css.contactListItem} >
      <p>{name} - &#9743; {phone}</p>
      <div>
        <button
          type='button'
          onClick={onClickDeleteContact}
          disabled={isLoading}            
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </li>
  )  
};

export default ContactsListItem;