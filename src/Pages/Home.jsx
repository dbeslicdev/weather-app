import React, { useContext, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";

export const Home = () => {
  const { location, setLocation } = useLocation("");
  let navigate = useNavigate("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!location) return;
    navigate(`weather/${location}`);
  };

  return (
    <div className="home-container">
      <form className="homeform" onSubmit={submitFormHandler}>
        <input
          type="text"
          className="homeform__search-bar"
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
