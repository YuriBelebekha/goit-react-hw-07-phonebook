import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';
import css from './ContactsListItem.module.css';

const ContactsListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const deleteContactData = (id) => dispatch(deleteContact(id));

  const [isDeleting, setIsDeleting] = useState(false);

  const onClickDeleteContact = () => {
    setIsDeleting(true);
    deleteContactData(id)
      .then((response) => {        
        if (response.error) {
          toast.error(`Contact wasn't deleted: ${response.payload}`, ToastOptions);
        } else {
          toast.info(`Contact ${name.toUpperCase()} was deleted`, ToastOptions);
        };
      })      
      .finally(() => {        
        setIsDeleting(false);
      });
  };
  
  return (    
    <li className={css.contactListItem} >
      <p>{name} - &#9743; {phone}</p>
      <div>
        <button
          type='button'
          onClick={onClickDeleteContact}
          disabled={isDeleting}            
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </li>
  )  
};

export default ContactsListItem;