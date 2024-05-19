import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [value, setValue] = useState(false);

  useEffect(() => {
    setValue(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setValue(true);
  }

  if (value) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-4">
          {forecast.map(function (dailyForecast, index) {
            if (index < 8) {
              return (
                <div className="col forecast-days" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5354b60afda2b7800186c06153932396";
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lon=${longitude}&lat=${latitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
