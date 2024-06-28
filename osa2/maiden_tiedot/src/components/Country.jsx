import axios from "axios";
import React, { useEffect, useState } from "react";

const Country = ({ oneCountry }) => {

    const [weatherData, setWeatherData] = useState([])

    console.log("in list one country")

    // this is quite horrible
    const name = oneCountry[0].name.common
    const capital = oneCountry[0].capital
    const area = oneCountry[0].area
    const languages = oneCountry[0].languages
    const flagUrl = oneCountry[0].flags.png

    const api_key = import.meta.env.VITE_SOME_KEY

    // getting weather data from weatherbit api
    useEffect(() => {
        axios
            .get(`http://api.weatherbit.io/v2.0/current?city=${capital}&&key=${api_key}`)
            .then(response => {
                console.log(response.data.data[0].app_temp, response.data.data[0].wind_spd)
                setWeatherData(response.data.data[0])
            })
            .catch(error => {
                console.log("fetching failed")
            })
    }, [])

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
            <div>wind speed: {weatherData.wind_spd} m/s</div>
            <div>temperature: {weatherData.app_temp} celsius </div>


        </div>
    )
}



export default Country