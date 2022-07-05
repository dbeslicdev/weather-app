import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WeatherProvider } from "./components/weather/WeatherContext";

import { Home } from "./Pages/Home";
import { Weather } from "./Pages/Weather";

export default function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Router>
      </WeatherProvider>
    </div>
  );
}
