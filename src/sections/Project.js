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
          Many digital interfaces contain dropdown menus, but not all are designed with accessibility in mind. 
          This project focused on analyzing dropdown menus in popular platforms like Spotify, Slack, and 
          Google Calendar to identify key issues in usability, particularly for keyboard and screen reader users.
          </p>
          <p className="description">
          Through this analysis, I found that keyboard navigation often required excessive tabbing, and 
          screen readers struggled with unclear labels. To address these issues, I redesigned Spotify’s 
          profile dropdown using Figma, introducing:
          </p>
          <p className="description">
          • A shortcut (Ctrl + P) for quicker navigation.
          </p>
          <p className="description">
          • Auto-focus on the first menu item to reduce tab presses.
          </p>
          <p className="description">
          • Improved ARIA labels to enhance screen reader support.
          </p>
          <p className="description">
          This project revealed unexpected challenges, such as how many applications prioritize mouse 
          interactions over keyboard accessibility. The redesign highlights the importance of inclusive 
          design, ensuring that user interfaces are efficient, intuitive, and accessible for everyone.
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