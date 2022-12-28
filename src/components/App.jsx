import {useState} from "react";
import {Section, Title} from "./App.styled";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";
import {useLocalStorage} from "./hooks/useLocalStorage";

const contactsTemplate = [
  {id: 'id-1', name: 'Test contact One', number: '459-12-56'},//first time only
  {id: 'id-2', name: 'Test contact Two', number: '443-89-12'},
  {id: 'id-3', name: 'Test contact Three', number: '645-17-79'},
  {id: 'id-4', name: 'Test contact Four', number: '227-91-26'},
];

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? contactsTemplate;
  // });
  const [contacts, setContacts] = useLocalStorage('contacts', contactsTemplate)
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  //   // console.log(contacts);
  // }, [contacts]);

  const handleAddContact = ({name, number}) => {

    const id = nanoid();
    const isAlreadyInContacts = contacts.find(contact => contact.name === name);

    if (isAlreadyInContacts) {
      return alert(`${name} is already in contacts`)
    }

    setContacts([...contacts, {
      id,
      name,
      number,
    }])
  };

  const handleSearchContacts = (e) => {
    setFilter(e.currentTarget.value);
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact}></ContactForm>
      <Filter onSearch={handleSearchContacts}></Filter>
      <ContactsList data={contacts} filter={filter} onDelete={deleteContact}></ContactsList>
    </Section>
  );
}

