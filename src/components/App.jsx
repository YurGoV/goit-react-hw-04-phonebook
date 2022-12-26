import React, {Component} from "react";
import {Section, Title} from "./App.styled";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";
import PropTypes from 'prop-types';


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Test contact One', number: '459-12-56'},//first time only
      {id: 'id-2', name: 'Test contact Two', number: '443-89-12'},
      {id: 'id-3', name: 'Test contact Three', number: '645-17-79'},
      {id: 'id-4', name: 'Test contact Four', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({
        contacts: localContacts,
      })

    }

  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (currentContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  };


  handleAddContact = ({name, number}) => {

    const stateContacts = this.state.contacts;
    const id = nanoid();
    const isAlreadyInContacts = stateContacts.find(contact => contact.name === name);

    if (isAlreadyInContacts) {
      return alert(`${name} is already in contacts`)
    }
    this.setState({
      contacts: [...stateContacts, {
        id,
        name,
        number,
      }],
    })
  };

  handleSearchContacts = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleAddContact}></ContactForm>
        <Filter onSearch={this.handleSearchContacts}></Filter>
        <ContactsList data={contacts} filter={filter} onDelete={this.deleteContact}></ContactsList>
      </Section>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }
  )
}
