import { useState } from 'react'
//import Number from './components/Number'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const lowerCaseName = newName.toLowerCase();
    const isNameExists = persons.some(
      (person) =>
        person.name.toLowerCase() === lowerCaseName || person.number === newNumber
    );
    const isNameValid = newName.trim().length > 0;
    
    if (isNameExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    if (!isNameValid) {
      alert('Please enter a valid name.')
      return
    }

    const newPerson = { 
      name: newName,
      number: newNumber,
    }
    const updatedPersons = persons.filter(
      (person) =>
        person.name.toLowerCase() !== lowerCaseName || person.number !== newNumber
    );

    setPersons([...updatedPersons, newPerson])
    setNewName(' ')
    setNewNumber(' ')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
