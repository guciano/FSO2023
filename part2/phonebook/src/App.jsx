import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import contactDBService from './service/contactDBService'; 

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  
  //show all data
  useEffect(() => {
    contactDBService
      .read()
      .then(initialContactData => setPersons(initialContactData))
  }, [])

  //add data
  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    contactDBService
      .create(personObject)
      .then(returnedContact => {
        setPersons([...persons, returnedContact]);
      })
  };

  const deleteContact = id => {
    const deletePerson = persons.find(person => person.id === id)
    const windowConfirm = window.confirm(`Delete ${deletePerson.name}?`)    
    
    if (windowConfirm) {
      contactDBService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
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