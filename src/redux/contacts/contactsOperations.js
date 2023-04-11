import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, { rejectWithValue }) => {
    try {
      const addContact = await contactsAPI.fetchAddContact(newContact);
      return addContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/addContacts',
  async (id, { rejectWithValue }) => {
    try {
      const addContact = await contactsAPI.fetchDeleteContact(id);
      return addContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);