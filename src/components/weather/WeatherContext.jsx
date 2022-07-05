import React, { useState, createContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "../../hooks/useLocation";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "73f63ff4eb375395f2f079f2dccf53ac",
  };

  const { location, setLocation } = useLocation();

  const addLocationHandler = (location) => {
    setLocation(location);
  };

  console.log(location);
  const { data, setData } = useFetch(
    `${api.base}${location}&appid=${api.key}&units=metric`
  );
  console.log(data);

  return (
    <WeatherContext.Provider
      value={{
        api,
        data,
        setData,
        addLocationHandler,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
