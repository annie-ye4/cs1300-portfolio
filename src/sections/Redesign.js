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
            <tr>
                <td>Page layout should be optimized to avoid unnecessary scrolling</td>
                <td>Information is spread out and requires a lot of scrolling to get to important information</td>
                <td>Efficiency Issue: Users may spend more time than necessary to find what they need</td>
                <td>Awkward navigation and unnecessary scrolling</td>
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

        Before creating the site, I created mockups for each screen size to visualize what the user experience would look like. 
        These mockups helped ensure that the design was consistent and responsive across mobile, tablet, and desktop devices.
        For consistency, I created a visual style guide in Figma, with a color palette, typography, buttons 
        and componenents, and spacing and layout guidelines: 
        </p>
        <img className="style-guide" src="style-guide.png" alt="Style Guide" />
      </div>

      <div className="video-text-container">
        <div className="video-wrapper">
        <video autoPlay loop muted playsInline>
            <source src="phone-mockup.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-wrapper">
          <h2>Phone Mockup</h2>
          <p>
            <strong>Navigation Menu</strong><br></br>

                - Hamburger menu on the left corner. <br></br>
                - Clicking triggers a smooth dropdown animation (ease-in-out).  <br></br>
                - Bacaro log in the center. <br></br>
                - Phone icon on the right that initiates a tel: link.
        </p>
          <p>
            <strong>Hero Section</strong><br></br>
            - "Welcome to Bacaro" heading is centered with optimized spacing. <br></br>
            - Call-to-action buttons have a hover effect (gray background) and are stacked. <br></br>
            - Blurred background image enhances visual appeal. <br></br>
            - Operating hours as white text on a dark overlay ensures contrast & accessibility. </p>
          <p>
            <strong>Stay Connected & Directions Section </strong><br></br>
            - Social media icons in a column layout with gap spacing. <br></br>
            - Interactive map with drag support. <br></br>
            - Caption of appropriate size and color contrast for readability.
            </p>
            <p>
            <strong>Twitter Section</strong><br></br>
            - Darker blue background for contrast <br></br>
            - Tweet cards with 10px margin, scrollable horizontally (overflow-x: scroll).
          </p>
        </div>
      </div>

      <div className="tablet-text-container">
        
        <div className="text-wrapper">
          <h2>Tablet</h2>
          <p>
            <strong>Navigation Menu</strong><br></br>

                - Bacaro logo is larger for better visibility.<br></br>
                - Phone icon is slightly larger for improved accessibility.<br></br>
        </p>
          <p>
            <strong>Hero Section</strong><br></br>
            - "Welcome to Bacaro" heading is centered with optimized spacing and increased font size. <br></br>
            - Call-to-action buttons have a hover effect (gray background) and are slightly larger. <br></br>
            - Operating hours as a larger white text on a dark overlay ensures contrast & accessibility. </p>
          <p>
            <strong>Stay Connected & Directions Section </strong><br></br>
            - Social media icons are slightly larger in a column layout with gap spacing. <br></br>
            - Interactive map is larger with drag support. <br></br>
            - Caption of larger font size and color contrast for readability.
            </p>
            <p>
            <strong>Twitter Section</strong><br></br>
            - Tweet cards with 10px margin and larger font, scrollable horizontally (overflow-x: scroll).
          </p>
        </div>
        <div className="tablet-video-wrapper">
        <video autoPlay loop muted playsInline>
            <source className="tablet-video" src="tablet-mockup.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="laptop-text-container">
      <div className="laptop-video-wrapper">
      <video autoPlay loop muted playsInline>
            <source src="laptop-mockup.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-wrapper">
          <h2>Laptop Mockup</h2>
          <p>
            <strong>Navigation Menu</strong><br></br>

                - Full-width navigation bar replaces the hamburger menu for better accessibility. <br></br>
                - Centered menu items displayed in-line.  <br></br>
                - Dropdown for "About Us", with hover effects underlining menu items. <br></br>
                - Bacaro logo positioned on the left, phone icon on the right.
        </p>
          <p>
            <strong>Hero Section</strong><br></br>
            - Larger, centered main heading ("Welcome to Bacaro") with improved spacing. <br></br>
            - Call-to-action buttons are now larger and aligned side by side.<br></br>
            - Larger text for welcome and hours.</p>
          <p>
            <strong>Stay Connected & Directions Section </strong><br></br>
            - Larger social media icons in a column layout with gap spacing. <br></br>
            - Two-column layout optimizes spacing. <br></br>
            - Subheading text is larger than in tablet view for readability. <br></br>
            - Two-column layout aligns the map with the restaurant’s address for clarity.
            </p>
            <p>
            <strong>Twitter Section</strong><br></br>
            - Font size is larger than in tablet view, supporting better readability.
            <br></br>
            - Mouse scrolling & trackpad gestures supported for easier interaction.
          </p>
        </div>
      </div>

      <div className="visual-comparison-container">
      <p className="visual-desc">
        A well-designed restaurant website should be welcoming, intuitive, and easy to navigate. Below 
        I will provide side-by-side comparisons of Bacaro’s original site vs. my redesigned version. Bacaro's website is   
        linked <a href="https://bacarorestaurant.net/" target="_blank" rel="noopener noreferrer">here,</a> while my redesigned website is  
        linked <a href="https://bacaro-redesign.vercel.app/#" target="_blank" rel="noopener noreferrer">here.</a>
        </p>
        <div className="contrast-container">
  <div className="contrast-image">
    <p className="caption">Original Bacaro Website</p>
    <img src="contrast-before.png" alt="Original Bacaro Site" />
    <p>Hard-to-read text due to poor contrast</p>
  </div>

  <div className="contrast-arrow">→</div>

  <div className="contrast-image">
    <p className="caption">Redesigned Bacaro Website</p>
    <img src="contrast-after.png" alt="Redesigned Bacaro Site" />
    <p>Improved contrast and readability</p>
  </div>
</div>

<div className="contrast-container">
  <div className="contrast-image">
    <p className="caption">Original Bacaro Website</p>
    <video autoPlay loop muted playsInline>
            <source src="hover-before.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    <p>Inconsistent hover and click interactions</p>
  </div>

  <div className="contrast-arrow">→</div>

  <div className="contrast-image">
    <p className="caption">Redesigned Bacaro Website</p>
    <video autoPlay loop muted playsInline>
            <source src="hover-after.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    <p>Standardized hover effects for buttons & links</p>
  </div>
</div>
<div className="contrast-container">
  <div className="contrast-image">
    <p className="caption">Original Bacaro Website</p>
    <img src="spacing-before.png" alt="Original Bacaro Site" />
    <p>Awkward spacing and unintuitive scrollable container</p>
  </div>

  <div className="contrast-arrow">→</div>

  <div className="contrast-image">
    <p className="caption">Redesigned Bacaro Website</p>
    <img src="spacing-after.png" alt="Redesigned Bacaro Site" />
    <p>Optimized spacing and visible scrollbar</p>
  </div>
</div>

<div className="contrast-container">
  <div className="contrast-image">
    <p className="caption">Original Bacaro Website</p>
    <img src="navbar-before.png" alt="Original Bacaro Site" />
    <p>Buttons are unintuitive for users with no indication that it's a button</p>
  </div>

  <div className="contrast-arrow">→</div>

  <div className="contrast-image">
    <p className="caption">Redesigned Bacaro Website</p>
    <img src="navbar-after.png" alt="Redesigned Bacaro Site" />
    <p>Border around text to emphasize the button is clickable</p>
  </div>
</div>
      </div>

      <div className="responsive-container">
      <p>A major focus of this redesign was ensuring that the website adapts smoothly across mobile, tablet, and 
      desktop screens. Below is a preview showcasing the layout on different devices.
        </p>
        <video autoPlay loop muted playsInline>
            <source src="responsive-demo.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>

      <div className="conclusion-container">
        <h2>Conclusion</h2>
        <p>The Bacaro website redesign focused on usability, accessibility, and responsiveness, ensuring a 
            seamless experience for all users. Key improvements included <strong>fixing contrast issues, 
            streamlining navigation, and optimizing mobile responsiveness.</strong> </p><p>

            WebAIM WAVE testing showed a major accessibility boost—reducing <strong>14 contrast errors to 3</strong>, 
            which helped improve readability. The redesign now reflects 
            Bacaro’s elegance, allowing visitors to easily browse, book, and engage across all devices. </p><p>

            This project reinforced that great design is not just visual—it’s about making digital spaces 
            intuitive, inclusive, and user-friendly. </p>
        </div>
        </section>
  );
}
export default About;