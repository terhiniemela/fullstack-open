import axios from "axios";
import React, { useEffect, useState } from "react";

// component for showing country and weather information for one specific country

const Country = ({ oneCountry }) => {

    // state for weatherdata fetched from the api 
    const [weatherData, setWeatherData] = useState(null)

    console.log("in list one country")

    // this is quite horrible, but there should always be one country data to be shown when this component is used
    const name = oneCountry[0].name.common
    const capital = oneCountry[0].capital
    const area = oneCountry[0].area
    const languages = oneCountry[0].languages
    const flagUrl = oneCountry[0].flags.png

    // getting api key from 
    const api_key = import.meta.env.VITE_SOME_KEY

    // getting weather data from weatherbit api
    useEffect(() => {
        axios
            .get(`https://api.tomorrow.io/v4/weather/realtime?location=${capital}&units=metric&apikey=${api_key}`)
            .then(response => {
                setWeatherData(response.data.data)
            })
            .catch(error => {
                console.log("fetching failed")
            })
    }, [])

    // waiting until weather data is fetched 
    if (weatherData != null) {
        return (
            <div>
                <h1>{name}</h1>
                <p>capital: {capital}</p>
                <p>area: {area}</p>
                <h2>languages</h2>
                <ul>
                    {Object.entries(languages).map(([key, value]) => <li key={key}>{value}</li>)}
                </ul>
                <p><img src={flagUrl}></img></p>
                <h2>Weather in {capital}</h2>
                <div>temperature: {weatherData.values.temperature} celsius </div>
                <img src={`./src/assets/icons/${weatherData.values.weatherCode}.png`} alt="weather icon" />
                <div>wind speed: {weatherData.values.windSpeed} m/s</div>
                <img src={`./src/assets/powered-by-tomorrow/Powered_by_Tomorrow-Black.png`} alt="powered by tomorrow.io" />


            </div>
        )
    }

    return (
        null
    )
}



export default Country