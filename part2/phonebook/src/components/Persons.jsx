import React from 'react';

const Persons = ({ persons, searchTerm }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredPersons.map(person => (
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
    </ul>
  );
};

export default Persons;