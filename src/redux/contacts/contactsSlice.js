import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact
} from './contactsOperations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,  
  error: null,  
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,  
  extraReducers: (builder) => {
    // fetchContacts block
    builder
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;        
        state.isLoading = false;  
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;  
      })

    // addContacts block
    .addCase(addContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false; 
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;  
      })

    // deleteContacts block
    .addCase(deleteContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {        
        state.contacts = state.contacts.filter(contact => contact.id !== payload.id);        
        state.isLoading = false; 
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  },
});

export const contactsReducer = contactsSlice.reducer;



// The extraReducers "map object" notation
// https://redux-toolkit.js.org/api/createSlice#the-extrareducers-map-object-notation

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,  
//   extraReducers: {
//     // fetchContacts block
//     [fetchContacts.pending]: (state, _) => {
//       return { ...state, isLoading: true, }
//     },
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       return { ...state, contacts: payload, isLoading: false }
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       return { ...state, isLoading: false, error: payload, }
//     },

//     // addContacts block
//     [addContact.pending]: (state, _) => {
//       return { ...state, isLoading: true, }
//     },
//     [addContact.fulfilled]: (state, { payload }) => {      
//       return { ...state, contacts: [...state.contacts, payload], isLoading: false }
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       return { ...state, isLoading: false, error: payload, }
//     },

//     // deleteContacts block
//     [deleteContact.pending]: (state, _) => {
//       return { ...state, isLoading: true, }
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       return { ...state, contacts: state.contacts.filter(contact => contact.id !== payload), isLoading: false }
//     },
//     [deleteContact.rejected]: (state, { payload }) => {
//       return { ...state, isLoading: false, error: payload, }
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;