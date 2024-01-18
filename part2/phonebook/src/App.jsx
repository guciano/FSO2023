import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import contactDBService from './service/contactDBService'; 
import Notification from './components/Notification'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);
  
  //show all data
  useEffect(() => {
    contactDBService
      .read()
      .then(initialContactData => setPersons(initialContactData))
      .catch(error => console.error(error))
  }, [])

  //add data
  const addPerson = (e) => {
    e.preventDefault();
  
    //if a number is added to an already existing user, the new number will replace the old number.
    const existingPerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
  
    if (existingPerson) {
      const windowConfirm = window.confirm(
        `${newName} is already added to the phonebook. Do you want to update the phone number?`
      );
  
      if (windowConfirm) {
        const updateContact = {
          ...existingPerson,
          number: newNumber
        };
  
        contactDBService
          .update(existingPerson.id, updateContact)
          .then((returnedContact) => {
            setPersons(
              persons.map(person => (person.id !== existingPerson.id ? person : returnedContact))
            )
            setNotification({
              text: `Updated ${returnedContact.name}'s number`,
              type: 'success'
            });
            setTimeout(() => setNotification(null), 4500);
          })
          .catch(() => {
            setPersons(persons.filter(person => person.name !== person.name))
            setNotification({
              text: `Information of ${person.name} has already been removed from server`,
              type: 'error'
            })
            setTimeout(() => setNotification(null), 4500)
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
  
      contactDBService
        .create(personObject)
        .then((returnedContact) => {
           setPersons([...persons, returnedContact])
           setNotification({
            text: `Added ${returnedContact.name}`,
            type: 'success'
           })
           setTimeout(() => setNotification(null), 4500);
        })
        .catch(error => {
          setNotification({
            text: error.response.data,
            type: 'error'
          })
          setTimeout(() => setNotification(null), 4500);
        })
        
    }
    setNewName('');
    setNewNumber('');
  };  

  const deleteContact = id => {
    const deletePerson = persons.find(person => person.id === id)
    const windowConfirm = window.confirm(`Delete ${deletePerson.name}?`)    
    
    if (windowConfirm) {
      contactDBService
        .remove(id)
        .then(() => {
          setPersons(
            persons.filter((person) => person.id !== id)
          )
          setNotification({
            text: `${deletePerson.name} has been deleted`,
            type: 'success'
          })
          setTimeout(() => setNotification(null), 4500);
        })
        .catch(() => {
          setPersons(persons.filter(person => person.id !== id))
          setNotification({
            text: error.response.data,
            type: 'error'
          })
          setTimeout(() => setNotification(null), 4500);
        })
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const person = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      
      <Persons persons={person} searchTerm={searchTerm} deleteContact={deleteContact} />
    </div>
  );
};

export default App;