import Axios from "axios";
import React, { useState } from 'react';
import WeatherResult from "./WeatherResult";

function Weather() {
  const [zip, setZip] = useState("");
  const [weather, setWeather] = useState(null);
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(url)
      .then((result) => {
        setWeather(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Find weather in your area in the US of A</h1>
        {weather ? <WeatherResult weather={weather}/> : null}
        <label htmlFor="zip">Zip Code</label>
        <input
          id="zip"
          name="zip"
          type="text"
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
        <input type="submit" value="Find Weather" />
      </form>
    </div>
  );
}

export default Weather;
