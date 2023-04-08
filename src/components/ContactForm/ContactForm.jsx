import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/contactsSlice';
import shortid from 'shortid';
import css from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
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
      number,
    };

    const checkDuplicateContact = contacts.some(contact =>      
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    checkDuplicateContact
      ? alert(`${name.toUpperCase()} is already in contacts`)
      : dispatch(addContact(contact));    

    setName('');
    setNumber('');
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
          value={number}
          onChange={handleChange}
          required            
        />
      </label>
      <button className={css.btnAdd} type="submit">Add contact</button>
    </form>
  )  
}

export default ContactForm;