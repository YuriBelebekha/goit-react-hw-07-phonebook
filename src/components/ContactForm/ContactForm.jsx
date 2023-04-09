import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import { ToastOptions } from 'services/toast-options';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); 
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setPhone(value);
        break;
      
      default:
        return;
    };
  };  

  const handleSubmit = e => {
    e.preventDefault();    
    const contact = {
      id: shortid.generate(),
      name,
      phone,
    };

    const checkDuplicateContact = contacts.some(contact =>      
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    checkDuplicateContact
      ? toast.error(`${name.toUpperCase()} is already in contacts`, ToastOptions)
      : addContact(contact)
        ? toast.success(`${name.toUpperCase()} added to phonebook`, ToastOptions)
        : toast.error('Something went wrong... :(', ToastOptions);
    
    setName('');
    setPhone('');   
  };
  
  return (
    <form
      className={css.section}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required            
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleChange}
          required            
        />
      </label>
      <button className={css.btnAdd} type="submit">Add contact</button>
    </form>
  )  
}

export default ContactForm;