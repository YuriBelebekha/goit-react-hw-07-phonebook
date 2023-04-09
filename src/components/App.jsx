import Section from './Section';
import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ToastContainer } from 'react-toastify';

export default function App() {  
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />

        <ContactsList />
      </Section>

      <ToastContainer />
    </>
  );  
}