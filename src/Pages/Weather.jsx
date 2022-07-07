import "./Weather.css";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WeatherBox } from "../components/weather/WeatherBox";

export const Weather = () => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/forecast?q=",
    key: "73f63ff4eb375395f2f079f2dccf53ac",
  };
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const params = useParams();
  const fetchIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (!params) return;

    fetch(`${api.base}${params.location}&appid=${api.key}&units=metric`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [params.location]);

  const onEnter = () => {
    navigate(`/weather/${query}`);
  };

  return (
    <>
      {data && (
        <WeatherBox
          data={data}
          setData={setData}
          query={query}
          setQuery={setQuery}
          fetchIcon={fetchIcon}
          onEnter={onEnter}
        />
      )}
    </>
  );
};
