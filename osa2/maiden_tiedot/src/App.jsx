import { useState, useEffect } from 'react'
import maiden_tiedotService from './services/maiden_tiedot'
import ListResults from './components/ListResults'

// this app fetches country & weather information data from two apis, user queries data with a search form and
//  ui views are changed depending on the number of search results

const App = () => {
  // state for all countries fetched from the api
  const [countries, setCountries] = useState([])
  // state for filtered countries to be shown
  const [filteredCountries, setFilteredCountries] = useState([])
  // state for search filter
  const [searchFilter, setSearchFilter] = useState('')
  // state for triggering different results for user
  const [showResults, setShowResults] = useState('')


  // fetching data for all countries from api
  useEffect(() => {
    console.log('effect run, fetching countries...')
    maiden_tiedotService
      .getAll()
      .then(response => {
        setCountries(response.data)
        console.log(response.data, countries.length)
      })
      .catch(error => {
        console.log('fetching failed')
      })

  }, [])

  // event handler for search filter changes
  // view is rendered differently depending on the number of search results with the state showResults
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setSearchFilter(event.target.value)
    // countries array is filtered with user input for a country name
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredCountries(filtered)
    console.log(filtered, filtered.length)

    // over 10 results is too much, so we will not show anything
    if (filtered.length > 10) {
      setShowResults('too many')
      console.log('too many')
    }
    // ten or less results is ok so user will be shown a list of results 
    else if (filtered.length > 1 && filtered.length <= 10) {
      setShowResults('list')
      console.log('list')
    }
    // one result triggers a country information page to be shown 
    else if (filtered.length == 1) {
      setShowResults('one')
      console.log('one')
    }
    else {
      setShowResults('nothing')
      console.log('nothing')
    }
  }

  // event handler for buttons in country list, user selects country information to be shown
  // if button is clicked, the states need to be updated so that we only show one country
  const handleButtonChange = (event) => {
    console.log(event.target.id)
    const country = countries.filter(country => country.name.common == event.target.id)
    console.log(country, "showing one country after click")
    setFilteredCountries(country)
    setShowResults('one')
  }

  return (
    <div>
      find countries <input value={searchFilter} onChange={handleFilterChange} />
      <ListResults countryList={filteredCountries} showResults={showResults} buttonChange={handleButtonChange} />
    </div>
  )
}

export default App