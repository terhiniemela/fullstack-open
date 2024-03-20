import { useState } from 'react'

const ListPersons = () => {
  persons.map((person) => <p key={person.name}> {person.name}</p>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  // event handler for adding a person to phone book
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button cklicket', event.target)
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  // event handler for handling form change 
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const listPersons = () => {
    persons.map((person) => <p key={person.name}> {person.name}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      {persons.map((person) => <p key={person.name}> {person.name}</p>)}
    </div >
  )

}

export default App