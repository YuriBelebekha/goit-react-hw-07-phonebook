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
          {/* <button
            type='button'
            onClick={() => deleteContact(id)}
            disabled={isDeleting}
          >
            {isDeleting ? 'Updating...' : 'Update'}
          </button> */}
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







// import { useSelector } from 'react-redux';
// import { getFilter } from 'redux/filterSlice';
// import {
//   useGetContactsQuery,
//   useDeleteContactMutation,
// } from 'redux/contactsSlice';
// import shortid from 'shortid';
// import css from './ContactsListItem.module.css';

// const ContactsListItem = () => {    
//   const filter = useSelector(getFilter);  
//   const { data: contacts, isFetching } = useGetContactsQuery();
//   const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

//   const getFilteredContacts = () => {        
//     const normalizedFilter = filter.toLowerCase();
    
//     if (contacts) {
//       return contacts.filter(contact => 
//         contact.name.toLowerCase().includes(normalizedFilter)
//       );
//     }
//   };

//   // console.log(getFilteredContacts())
  
//   return (
//     <>
//       {isFetching && <p>Loading...</p>}
//       {contacts && getFilteredContacts().map(({id, name, phone}) => (
//         <li
//           key={shortid.generate()}
//           className={css.contactListItem}
//         >
//           <p>{name}: {phone}</p>
//           <button
//             type='button'
//             onClick={() => deleteContact(id)}
//             disabled={isDeleting}
//           >
//             {isDeleting ? 'Deleting...' : 'Delete'}
//           </button>
//         </li>
//       ))}
//     </>
//   )  
// };

// export default ContactsListItem;