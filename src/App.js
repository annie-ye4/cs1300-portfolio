import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./sections/Home";
import Project from "./sections/Project";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Home />
        <Project />
        <About />
        {/* <Contact /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;