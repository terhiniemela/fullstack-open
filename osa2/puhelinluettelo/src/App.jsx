import { useState } from 'react'

const ListPersons = () => {
  persons.map((person) => <p key={person.name}> {person.name}</p>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '041-22222' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  // event handler for adding a person to phone book
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button cklicket', event.target)
    const personObject = {
      name: newName,
      number: newNumber
    }

    // person is added if the name isn't already listed
    if (persons.find(person => (person.name !== newName))) {
      console.log(newName)
      console.log(persons.includes(newName))
      setPersons(persons.concat(personObject))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  // event handler for handling form change 
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <h3>add a new</h3>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.name}> {person.name} {person.number}</p>)}
    </div >
  )

}

export default App