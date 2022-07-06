import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WeatherProvider } from "./components/weather/WeatherContext";
import { useLocation } from "./hooks/useLocation";

import { Home } from "./Pages/Home";
import { Weather } from "./Pages/Weather";

export default function App() {
  const { location, setLocation } = useLocation();

  const addLocationHandler = (location) => {
    setLocation(location);
  };

  console.log(location);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home addLocation={addLocationHandler} />} />
          <Route path="/weather" element={<Weather location={location} />} />
        </Routes>
      </Router>
    </div>
  );
}
