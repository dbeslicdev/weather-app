import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Weather } from "./Pages/Weather";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:location" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}
