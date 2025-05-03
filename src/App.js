import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./sections/Home";
import Project from "./sections/Project";
import About from "./sections/About";
import Personas from "./sections/Personas";
import Redesign from "./sections/Redesign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash"; // Import the helper


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Home page will have all sections, making it scrollable */}
          <Route
            path="/"
            element={
              <>
              <ScrollToHash />
                <Home />
                <Project />
                <Personas />
                <Redesign />
                {/* <About /> */}
              </>
            }
          />
          {/* Separate page for Accessible Components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
