import { useState, useEffect } from 'react'
import axios from 'axios'
import maiden_tiedotService from './services/maiden_tiedot'
import Country from './components/Country'


const App = () => {
  // state for all countries fetched from the api
  const [countries, setCountries] = useState([])
  // state for filtered countries
  const [filteredCountries, setFilteredCountries] = useState([])
  // state for new search filter
  const [searchFilter, setSearchFilter] = useState('')
  // state for triggering different results
  const [showResults, setShowResults] = useState('')


  // fetching data for all countries from api
  useEffect(() => {
    console.log('effect run, fetching countries...')
    maiden_tiedotService
      .getAll()
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
        console.log(countries.length)
      })
      .catch(error => {
        console.log('fetching failed')
      })

  }, [])

  // event handler for search filter changes
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setSearchFilter(event.target.value)
    const value = event.target.value.toLowerCase()
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(value))
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(value)))
    console.log(filtered)
    console.log(filtered.length)

    if (filtered.length > 10) {
      setShowResults('too many')
      console.log('too many')
    }
    else if (filtered.length > 1 && filtered.length <= 10) {
      setShowResults('list')
      console.log('list')
    }
    else if (filtered.length === 1) {
      setShowResults('one')
      console.log('one')
    }
    else {
      setShowResults('nothing')
      console.log('nothing')
    }
  }

  // event handler for buttons in country list
  const handleButtonChange = (event) => {
    console.log(event.target)
    const oneCountry = countries.filter(country => country.name.common == event.target.id)
    console.log(oneCountry, "showing one country after click")
    // setting the states for one country, updating the filtered countries where there is only one 
    setFilteredCountries(oneCountry)
    setShowResults('one')
  }

  const ListResults = () => {

    if (showResults == 'too many') {
      return (
        <div><p>Too many matches, specify another filter.</p></div>
      )
    }

    else if (showResults === 'list') {
      return (
        <div>
          {filteredCountries.map(country => <p key={country.name.common}> {country.name.common} <button id={country.name.common} onClick={handleButtonChange}>show</button> </p>)}
        </div>
      )
    }

    else if (showResults === 'one') {

      return (
        <div>
          <Country oneCountry={filteredCountries} />
        </div>
      )
    }
    else if (showResults === 'nothing') {
      return (
        <div>Try another search term</div>
      )
    }

    return (
      console.log('start searching pls')
    )
  }

  return (
    <div>
      find countries <input value={searchFilter} onChange={handleFilterChange} />
      <ListResults countryList={filteredCountries} showResults={showResults} />
    </div>
  )
}



export default App