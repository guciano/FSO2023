import { useState } from 'react'
//import Number from './components/Number'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }
    setPersons([...persons, newPerson])
    setNewName(' ')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
