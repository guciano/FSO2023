import React from 'react';

const Persons = ({ persons, searchTerm }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredPersons.map(person => (
        <div key={person.id}>{person.name} {person.number}</div>
      ))}
    </div>
  );
};

export default Persons;