import React from "react";
function About() {
  return (
      <section id="redesign" className="redesign-section">
          <h1>Responsive Redesign</h1>
          <p className="description">Bacaro is a well-loved restaurant in Rhode Island, known for its refined Italian cuisine and 
            inviting ambiance. However, its website failed to match the elegance of its dining experience. 
            I found several usability and accessibility issues, particularly poor contrast, inconsistent 
            interactions, and a lack of mobile responsiveness. This project aimed to modernize Bacaro’s 
            website by improving usability, responsiveness, and accessibility while maintaining its 
            sophisticated branding.</p>

        <div className="table-container">
            <p className="tables-description">
                To understand how the website could be improved, I conducted a usability analysis focusing 
                on efficiency, learnability, memorability, and accessibility. I also reflected on how this
                would impact the user experience.
            </p>
        <h2 className="table-title">Efficiency Issues</h2>
        <table className="reflection-table">
          <thead>
            <tr>
              <th>User Expectation (Conceptual Model)</th>
              <th>Current Website Behavior</th>
              <th>Usability Issue</th>
              <th>Impact on User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Users expect visible scrollbars to indicate scrollable content</td>
              <td>Scrollable media posts container doesn’t display a scrollbar until the user starts scrolling</td>
              <td>Efficiency Issue: Users don’t realize the content is scrollable</td>
              <td>Users might miss updates or important content</td>
            </tr>
            <tr>
              <td>Clicking a menu item should either open a dropdown or redirect to a page consistently</td>
              <td>Clicking "About Us" text opens a dropdown, but clicking the arrow redirects to a new page</td>
              <td>Learnability Issue: Users must figure out how this interaction works</td>
              <td>Causes confusion and slows down navigation</td>
            </tr>
            <tr>
                <td>Text should be readable against its background</td>
                <td>White text is placed over high-contrast images</td>
                <td>Efficiency & Conceptual Model Issue: Users expect text to be legible at all times</td>
                <td>Users (especially visually impaired) struggle to read content</td>
            </tr>
            <tr>
                <td>All interactive elements should behave the same way</td>
                <td>Some buttons change on hover, others do not</td>
                <td>Memorability Issue: Inconsistent interactions make it harder to recall how to navigate</td>
                <td>Users waste time figuring out which elements are interactive</td>
            </tr>
            <tr>
                <td>Page layout should be optimized to avoid unnecessary scrolling</td>
                <td>A large, empty white bar appears at the bottom of the page</td>
                <td>Efficiency Issue: Unused space makes the site feel incomplete</td>
                <td>Wasted space makes navigation awkward and adds unnecessary scrolling</td>
            </tr>
          </tbody>
        </table>
        <p className="tables-description-bottom">In addition, the WebAIM WAVE tool detected 14 contrast errors, all related to low text contrast. 
            I agree with this, as I also found some parts of the website difficult to 
            read due to poor color contrast, often needing extra effort.

            Additionally, the tool flagged some images missing alternative text, which can be a barrier for
            visually impaired users. </p>
      </div>

      <div className="visual-design-guide">
        <p className="design-guide-desc">To address these issues, I focused on three major improvements:<br></br>
            - Enhancing contrast & readability to improve text visibility on all screen sizes <br></br>
            - Creating a seamless user experience to standardize interactions across the site <br></br>
            - Making the site fully responsive to ensure smooth transitions across mobile, tablet, and desktop </p>
        <p className="design-guide-desc">

        To ensure consistency, I created a visual style guide in Figma, with a color palette, typography, buttons 
        and componenents, and spacing and layout guidelines: 
        </p>
        <img className="style-guide" src="style-guide.png" alt="Style Guide" />
      </div>
        </section>
  );
}
export default About;