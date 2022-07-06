import React, { useContext, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../components/weather/WeatherContext";
import { useLocation } from "../hooks/useLocation";

export const Home = ({ addLocation }) => {
  const { location, setLocation } = useLocation("");
  let navigate = useNavigate("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    navigate("/weather");
    addLocation(location);
  };

  return (
    <div className="home-container">
      <form className="homeform" onSubmit={submitFormHandler}>
        <input
          type="text"
          className="search-bar"
          placeholder="Enter city name..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};
