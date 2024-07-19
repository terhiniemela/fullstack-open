import Country from './Country'

// component for listing results for countries user has searched

const ListResults = ({ countryList, showResults, buttonChange }) => {



    if (showResults == 'too many') {
        return (
            <div><p>Too many matches, specify another filter.</p></div>
        )
    }

    // list 
    else if (showResults === 'list') {
        return (
            <div>
                {countryList.map(country => <p key={country.name.common}> {country.name.common} <button id={country.name.common} onClick={buttonChange}>show</button> </p>)}
            </div>
        )
    }

    else if (showResults === 'one' && countryList.length == 1) {

        return (
            <div>
                <Country oneCountry={countryList} />
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

export default ListResults