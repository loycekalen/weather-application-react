import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
        <span className="unit">
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
