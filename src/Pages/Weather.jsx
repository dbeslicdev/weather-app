import "./Weather.css";
import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WeatherBox } from "../components/weather/WeatherBox";
import { useLocation } from "../hooks/useLocation";

export const Weather = () => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/forecast?q=",
    key: "73f63ff4eb375395f2f079f2dccf53ac",
  };

  const { location, setLocation } = useLocation();

  useEffect(() => {
    if (!params) return;
    fetch(`${api.base}${params.location}&appid=${api.key}&units=metric`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  let navigate = useNavigate("");

  const [data, setData] = useState();

  const params = useParams();

  const fetchIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      {data && (
        <WeatherBox
          data={data}
          setData={setData}
          fetchIcon={fetchIcon}
          handleSearch={handleSearch}
          location={location}
          setLocation={setLocation}
        />
      )}
    </>
  );
};
