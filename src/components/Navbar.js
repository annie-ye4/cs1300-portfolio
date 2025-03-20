import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection("home")}>home</button>
      <button onClick={() => scrollToSection("project")}>accessible components</button>
      <button onClick={() => scrollToSection("personas")}>personas & storyboarding</button>
      <button onClick={() => scrollToSection("redesign")}>redesign</button>
      <button onClick={() => scrollToSection("about")}>about</button>
    </nav>
  );
}

export default Navbar;
