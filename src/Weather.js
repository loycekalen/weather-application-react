import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({ value: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      value: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.value) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            autoFocus="on"
            className="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherInfo
          data={weather}
          latitude={weather.coordinates.lat}
          longitude={weather.coordinates.lon}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
