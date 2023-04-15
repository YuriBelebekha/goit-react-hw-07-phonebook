import axios from 'axios';

axios.defaults.baseURL = 'https://64319c163adb15965170609d.mockapi.io/api/v1';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);  
  return data;
};

export async function fetchAddContact(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
};

export async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};