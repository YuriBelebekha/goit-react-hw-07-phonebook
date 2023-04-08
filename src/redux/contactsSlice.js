import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Bill Gates', number: '459-12-56' },
      { id: 'id-2', name: 'Steve Jobs', number: '443-89-12' },
      { id: 'id-3', name: 'Linus Torvalds', number: '645-17-79' },
      { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
      { id: 'id-5', name: 'Guido van Rossum', number: '258-46-26' },
      { id: 'id-6', name: 'Bjarne Stroustrup', number: '777-77-77' },
      { id: 'id-7', name: 'Tim Berners-Lee', number: '111-11-11' },
      { id: 'id-8', name: 'Dennis Ritchie', number: '222-11-11' },
    ],
    filter: '',
  },
  reducers: {    
    addContact(state, action) {
      state.contacts.unshift(action.payload);
    },

    delContact(state, action) {      
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );      
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

// REDUCERS
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

// ACTIONS
export const { addContact, delContact, setFilter } = contactsSlice.actions;

// SELECTORS
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;









