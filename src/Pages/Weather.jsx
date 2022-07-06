import "./Weather.css";
import React, { useState, useRef, useEffect } from "react";
import { WeatherBox } from "../components/weather/WeatherBox";

export const Weather = ({ location }) => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "73f63ff4eb375395f2f079f2dccf53ac",
  };

  const [data, setData] = useState([]);
  const initMount = useRef(true);

  console.log(initMount);
  console.log(location);
  console.log(data);

  useEffect(() => {
    if (initMount.current) {
      initMount.current = false;
      return;
    } else
      fetch(`${api.base}Osijek&appid=${api.key}&units=metric`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
  }, [location]);

  return <WeatherBox data={data} setData={setData} />;
};
