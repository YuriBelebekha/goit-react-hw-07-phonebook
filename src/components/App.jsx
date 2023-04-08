import Section from './Section';
import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './Filter';

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
    </>
  );  
}