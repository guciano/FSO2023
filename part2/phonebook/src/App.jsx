import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList';
import PersonSearch from './components/PersonSearch';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    });
  }, []);
  console.log('render', notes.length, 'notes')

  const addPerson = (newPerson) => {
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonSearch searchTerm={searchTerm} handleSearch={handleSearch} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} />

      <h2>Numbers</h2>
      <PersonList
        persons={persons.filter(
          (person) =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.number.includes(searchTerm)
        )}
      />
    </div>
  );
};

export default App;
