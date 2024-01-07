import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList';
import PersonSearch from './components/PersonSearch';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {}, []);

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
