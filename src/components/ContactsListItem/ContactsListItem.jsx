import { useDeleteContactMutation } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';
import css from './ContactsListItem.module.css';

const ContactsListItem = ({ id, name, phone }) => {  
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
  const onClickDeleteContact = () => {
    setTimeout(() => {
      toast.info(`Contact ${name.toUpperCase()} was deleted`, ToastOptions)
    }, 1000);
    deleteContact(id);
  }

  return (
    <>      
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
    </>
  )  
};

export default ContactsListItem;