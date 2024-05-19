import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h2>
        {props.data.city}, {props.data.country}
      </h2>
      <ul>
        <li>
          {" "}
          <FormatDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 mb-3">
        <div className="col ms-4">
          <WeatherIcon code={props.data.icon} size={120} />
        </div>
        <div className="col">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>

      <p>
        💧 Humidity <span>{props.data.humidity}%</span>
      </p>
      <p>
        💨 Wind <span>{Math.round(props.data.wind)}km/h</span>
      </p>
      <WeatherForecast latitude={props.latitude} longitude={props.longitude} />
    </div>
  );
}
