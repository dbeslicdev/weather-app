import "./Weather.css";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WeatherBox } from "../components/weather/WeatherBox";

export const Weather = () => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "73f63ff4eb375395f2f079f2dccf53ac",
  };

  const [data, setData] = useState();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (!params) return;

    fetch(`${api.base}${params.location}&appid=${api.key}&units=metric`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return <>{data && <WeatherBox data={data} setData={setData} />}</>;
};
