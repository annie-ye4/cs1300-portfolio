import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./sections/Home";
import Project from "./sections/Project";
import About from "./sections/About";
import Personas from "./sections/Personas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                <Home />
                <Project />
                <Personas />
                <About />
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
