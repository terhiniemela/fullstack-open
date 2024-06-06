import { useState, useEffect } from 'react'
import axios from 'axios'
import phonebookService from './services/puhelinluettelo'

const App = () => {

  // state for adding persons in the notebook
  const [persons, setPersons] = useState([])
  // state for adding a new name to phonebook
  const [newName, setNewName] = useState('')
  // state for adding a new number to phonebook
  const [newNumber, setNewNumber] = useState('')
  // state for triggering showing all numbers in the phonebook or not
  const [showAll, setShowAll] = useState(true)
  // state for filtering names from the phonebook
  const [newFilter, setNewFilter] = useState('')
  // state for filtered phonebook 
  const [filteredPhonebook, setFilteredPhonebook] = useState([])

  // 2.11. changing the app to fetch data from json server using effect hooks
  // notes: 
  // - with parameter [] effect is run along only with the first render of the component
  // - calling a state-updating function tringgers a re-rendering of the component
  useEffect(() => {
    console.log('effect')
    phonebookService
      // fetches data from the server
      .getAll()
      // event handler 
      .then(response => {
        console.log('promise fulfilled')
        // setting the data from the server to state and 
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  // event handler for adding a person to phone book
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button cklicket', event.target)

    const personObject = {
      name: newName,
      number: newNumber
    }

    // first: check if the name exists in the array of persons, if it exists: alert, if not: add name and number to list
    persons.some(person => (person.name.toLowerCase() == newName.toLowerCase())) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  // event handler for filter changes
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    setShowAll(false)
    const value = event.target.value.toLowerCase()
    const filtered = persons.filter(person => person.name.toLowerCase().includes(value))
    setFilteredPhonebook(filtered)
  }

  // event handler for handling form change for name
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // event handler for handling form change for number
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />

      <Form onSubmit={addPerson} name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Numbers showAllValue={showAll} persons={persons} filteredPhonebook={filteredPhonebook} />
    </div >
  )
}

// component Filter 
const Filter = ({ filter, onChange }) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={onChange} />
    </div>
  )
}

// component for the form where user can submit a new name and a number to the phonebook
const Form = ({ onSubmit, name, handleNameChange, number, handleNumberChange }) => {
  return (<form onSubmit={onSubmit}>
    <h3>add a new</h3>
    <div>
      name: <input value={name} onChange={handleNameChange} />
    </div>
    <div>
      number: <input value={number} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}


// component for showing the phonebook and numbers
const Numbers = ({ showAllValue, persons, filteredPhonebook }) => {
  return (
    <div>
      {
        showAllValue === true ?
          persons.map(person => <p key={person.name}> {person.name} {person.number}</p>) :
          filteredPhonebook.map((person) => <p key={person.name}> {person.name} {person.number}</p>)
      }
    </div>
  )
}

export default App