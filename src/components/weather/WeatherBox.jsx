import React from "react";

export const WeatherBox = ({ data, query, setQuery }) => {
  const { name, sys, main, weather } = data;
  console.log(data);
  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="weather">
        <div className="weather__city">{name}</div>
        <div className="weather__country">{sys.country} </div>
        <div className="weather__temp">
          {Math.round(main.temp)}
          °C
        </div>
        <div className="weather__description">{weather[0].main}</div>

        <div className="weather__pressure">
          Pressure: {main.pressure}
          <span className="index">hPa</span>
        </div>
        <div className="weather__humidity">
          Humidity: {main.humidity}
          <span className="index">%</span>
        </div>
        <div className="weather__minmax">
          Min: {Math.round(main.temp_min)}°C
          <div className="weather__minmax--max">
            Max:{Math.round(main.temp_max)}°C
          </div>
        </div>
      </div>
    </div>
  );
};
