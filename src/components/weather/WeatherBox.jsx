import React, { useState } from "react";
import "./WeatherBox.css";

export const WeatherBox = ({
  data,
  fetchIcon,
  query,
  setQuery,
  onEnter = { onEnter },
}) => {
  const { city, list } = data;

  return (
    <div className="container-main">
      <div className="container-daily">
        <form className="weatherform">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter city name..."
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") onEnter();
            }}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <div className="weather">
          <div className="weather__city">{city.name}</div>
          <div className="weather__country">{city.country} </div>
          <div className="weather__icon">
            <img src={fetchIcon(list[0].weather[0].icon)}></img>
          </div>
          <div className="weather__temp">
            {Math.round(list[0].main.temp)}
            °C
          </div>
          <div className="weather__description">{list[0].weather[0].main}</div>

          <div className="weather__pressure">
            Pressure: {list[0].main.pressure}
            <span className="index">hPa</span>
          </div>
          <div className="weather__humidity">
            Humidity: {list[0].main.humidity}
            <span className="index">%</span>
          </div>
          <div className="weather__minmax">
            Min: {Math.round(list[0].main.temp_min)}°C
            <div className="weather__minmax--max">
              Max:{Math.round(list[0].main.temp_max)}°C
            </div>
          </div>
        </div>
      </div>
      <div className="container-weekly">
        <div className="weekly">
          <div className="weekly__day">Fri</div>
          <div className="weather__icon--small">
            <img src={fetchIcon(list[6].weather[0].icon)}></img>
          </div>
          <div className="weekly__description">{list[6].weather[0].main}</div>
          <div className="weekly__temp">
            Min: {Math.round(list[6].main.temp)}
            °C <br /> Max: {Math.round(list[10].main.temp)}°C
          </div>
        </div>
        <div className="weekly">
          <div className="weekly__day">Sat</div>
          <div className="weather__icon--small">
            <img src={fetchIcon(list[14].weather[0].icon)}></img>
          </div>
          <div className="weekly__description">{list[14].weather[0].main}</div>
          <div className="weekly__temp">
            Min: {Math.round(list[14].main.temp)}
            °C <br /> Max: {Math.round(list[18].main.temp)}°C
          </div>
        </div>
        <div className="weekly">
          <div className="weekly__day">Sun</div>
          <div className="weather__icon--small">
            <img src={fetchIcon(list[22].weather[0].icon)}></img>
          </div>
          <div className="weekly__description">{list[22].weather[0].main}</div>
          <div className="weekly__temp">
            Min: {Math.round(list[22].main.temp)}
            °C <br /> Max: {Math.round(list[26].main.temp)}°C
          </div>
        </div>
        <div className="weekly">
          <div className="weekly__day">Mon</div>
          <div className="weather__icon--small">
            <img src={fetchIcon(list[30].weather[0].icon)}></img>
          </div>
          <div className="weekly__description">{list[30].weather[0].main}</div>
          <div className="weekly__temp">
            Min: {Math.round(list[30].main.temp)}
            °C <br /> Max: {Math.round(list[34].main.temp)}°C
          </div>
        </div>
      </div>
    </div>
  );
};
