import "./Weather.css";
import React, { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../components/weather/WeatherContext";
import { WeatherBox } from "../components/weather/WeatherBox";

export const Weather = () => {
  const { data, setData } = useContext(WeatherContext);

  return <WeatherBox data={data} setData={setData} />;
};
