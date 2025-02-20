import React from "react";
function Project() {
  return (
    <section id="project" className="project-section">
      <h1>projects</h1>
      <p>everything i've worked on for cs1300 :)</p>
      <div className="project-container">
        <div className="projects-left">
          <p className="title">accessible components (feb. 20)</p>
          <p className="description">
            For this assignment, I analyzed dropdown menus in Spotify, Slack, and
            Google Calendar, identifying accessibility and efficiency issues, especially
            for keyboard and screen reader users. I redesigned the Spotify profile dropdown,
            adding a shortcut (Ctrl + P) for faster navigation, auto-focus on the first menu item,
            and ARIA labels for better screen reader support. Design done on Figma.
          </p>
        </div>
        <div className="projects-right">
          <img src="accessible-components.png" alt="Design Example" />
        </div>
      </div>
    </section>
  );
}
export default Project;