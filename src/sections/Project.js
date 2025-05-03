import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="project" className="project-section">
      <div className ="heading">
        <h1>Accessible Components</h1>
      <p className="description">
      Dropdown menus are a common UI element used to present options without cluttering the interface.
       While they seem simple, their usability and accessibility can differ across applications. 
       This study compares how dropdowns are implemented in Spotify, Slack, and Google Calendar, focusing 
       on support for different input methods (mouse, keyboard, touch, and screen readers) to assess both 
       usability and inclusivity.
      </p>
      </div>
      

      {/* Video Container with 3 Videos in a Row */}
      <div className="video-container">
        <div className="video-card">
          <p className="title">Spotify account dropdown</p>
          <video controls>
            <source src="/spotify-dropdown.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-card">
          <p className="title">Slack channels dropdown</p>
          <video controls>
            <source src="slack-dropdown.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-card">
          <p className="title">Google Calendar duration dropdown</p>
          <video controls>
            <source src="gcal-dropdown.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className={`reflection-box`}>
        <p className="reflection-text">
        Interacting with different dropdown components was straightforward with a mouse/touchpad but more 
        challenging with a keyboard because of varying commands. Most apps provided access to the same 
        dropdown menu regardless of input method, except for Slack. Using touch was different because web 
        and mobile apps had distinct frameworks and placements.
        </p>
        
          <p className="reflection-text">
            One interesting observation from Slack was its use of control keys to navigate components 
            before allowing arrow key movement. It displayed an informational pop-up when using only the 
            tab key. In Google Calendar, pressing random keys unexpectedly started creating a new event, 
            which could be confusing for users relying solely on a keyboard. Additionally, navigating 
            dropdown menus with tab and enter keys wasn’t always intuitive.

          </p>
      
        <p className="reflection-text">
        For learnability, clear labels and icons (like a downward arrow) help users recognize dropdown 
        menus. Memorability improves when standard UI patterns—clicking to expand and selecting outside 
        to collapse—are followed. Efficiency increases with arrow key navigation, Enter key selection, 
        and pre-selecting common options.
        </p>
        <p className="reflection-text">
          Accessibility varied; Google Calendar clearly indicated dropdown menus with buttons and icons, 
          while Spotify and Slack relied on hover-based cues, making them less intuitive for users without 
          a mouse or trackpad. Mobile users might struggle to recognize clickable elements, requiring trial 
          and error to discover dropdowns.
        </p>
      </div>{/* Reflection Table Below */}
      <div className="table-container">
        <h2 className="table-title">Dropdown Inputs Table</h2>
        <table className="reflection-table">
          <thead>
            <tr>
              <th></th>
              <th>Spotify</th>
              <th>Slack</th>
              <th>Google Calendar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="category">Mouse/Touchpad</td>
              <td>Easy to find, located in common place of top right corner</td>
              <td>Changes color upon hovering to let the user know it’s clickable</td>
              <td>Has outline and downward arrow to tell users it’s a dropdown menu</td>
            </tr>
            <tr>
              <td className="category">Keyboard</td>
              <td>Had to tab around 20+ times to get to the dropdown</td>
              <td>Gave a helpful popup when I tried tabbing to let me know there are different keyboard commands</td>
              <td>Able to tab to get to the dropdown menu</td>
            </tr>
            <tr>
              <td className="category">Touch</td>
              <td>Location moved to top left corner instead</td>
              <td>Did not have the same dropdown menu option, unable to click on it</td>
              <td>Different way to approach the dropdown menu on the app (clicking on top left)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2 className="table-title">Dropdown Outputs Table</h2>
        <table className="reflection-table">
          <thead>
            <tr>
              <th></th>
              <th>Spotify</th>
              <th>Slack</th>
              <th>Google Calendar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="category">Mouse/Touchpad</td>
              <td>Profile icon gets a bit smaller when you click on it / bigger when you release.
                Dropdown menu also appears.</td>
              <td>Changes color with a ribbon effect when being pressed down.</td>
              <td>Has outline and downwards arrow to tell users it’s a dropdown menu.</td>
            </tr>
            <tr>
              <td className="category">Keyboard</td>
              <td>Used enter key to enter dropdown, then arrow keys to move around different options.
                Options are highlighted accordingly.</td>
              <td>Dropdown button is highlighted and outlined to indicate it's a button.</td>
              <td>Dropdown button is highlighted and outlined to indicate it's a button.</td>
            </tr>
            <tr>
              <td className="category">Touch</td>
              <td>Location moved to top left corner instead and profile is highlighted when clicked on.</td>
              <td>Did not have the same dropdown menu option, unable to click on it</td>
              <td>Hamburger icon represents multiple options and is highlighted when clicked on. </td>
            </tr>
            <tr>
              <td className="category">Screen Reader</td>
              <td>Very long focus order to get to the dropdown even though it’s a very pivotal part of account 
                management. Screen reader was not descriptive in telling that you can find something important 
                like settings in the collapsed item.
              </td>
              <td>Could not figure out how to access the same dropdown through the different keys that the 
                screen reader gave, seemed like I was getting stuck. </td>
              <td>Had a long focus order. A user would most likely have to assume to use tab, since there was 
                no further direction to move. However, it had a good description of the dropdown menu.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

{/* Two Side-by-Side Components */}
<div className="side-by-side-container">
        {/* Component 1 */}
        <div className="image-box">
          <p className="title">Mouse User State Model (Spotify)</p>
          <img src="mouse-model.png" alt="Top Image 1" className="top-image" />
          <div className="arrow">↓</div>
          <p className="title">Mouse User State Model + intentional trade-off</p>
          <img src="mouse-model-fixed.png" alt="Bottom Image 1" className="bottom-image" />
          <p className="model-desc">I added a hover delay before expanding the dropdown to prevent accidental openings and 
            improve accessibility for users with motor impairments. The trade-off is that it may reduce 
            efficiency because users must wait or click outside to close. I also changed the cursor to be a pointer
            so it's more obvious for users that it's a clickable item. </p>
        </div>

        {/* Component 2 */}
        <div className="image-box-2">
        <p className="title">Keyboard User State Model (Spotify)</p>
          <img src="keyboard-model.png" alt="Top Image 2" className="top-image" />
          <div className="arrow">↓</div>
          <p className="title">Keyboard User State Model + intentional trade-off</p>
          <img src="keyboard-model-fixed.png" alt="Bottom Image 2" className="bottom-image" />
          <p className="model-desc">I added a functionality so that when the dropdown is focused with the tab key, it automatically
             expands without requiring the Enter key, which makes the dropdown more responsive for keyboard 
             users. The trade-off is users might not always want it to expand automatically. </p>
        </div>
      </div>

              {/* New Component: Left to Right Transition */}
      <div className="left-right-container">
        <h2 className="component-title">Figma Redesign – Initial State</h2>
        <div className="left-right-content">
          <div className="left-side">
            <p className="subtitle">Spotify's current design</p>
            <img src="init-before.png" alt="Before Image" className="side-image" />
          </div>
          <div className="arrow-middle">→</div>
          <div className="right-side">
            <p className="subtitle">My design</p>
            <img src="init-after.png" alt="After Image" className="side-image" />
          </div>
        </div>
        <p className="figma-desc">To improve <b>efficiency</b>, I introduced a shortcut (Ctrl + P) that allows 
          users to navigate directly to the profile button, reducing the need for excessive tab presses. 
          This change significantly speeds up access to important account settings.

          For <b>memorability</b>, I modified the hover text to display "Account & Settings", reinforcing the 
          purpose of the menu and making it easier for users to recall its function.

          To enhance <b>learnability</b>, I updated the cursor to a pointer when hovering over the profile icon. 
          This subtle yet effective change helps users instantly recognize that the profile icon is an 
          interactive button.

          Lastly, I prioritized <b>accessibility</b> by adding an ARIA label for screen readers. The label 
          clearly states: "Profile menu, contains settings, log out, and account options." This ensures 
          that users relying on assistive technology receive a clear description of the menu’s contents 
          and purpose.</p>
      </div>
      <div className="left-right-container">
        <h2 className="component-title">Figma Redesign – Additional State (Dropdown expanded)</h2>
        <div className="left-right-content">
          <div className="left-side">
            <p className="subtitle">Spotify's current design</p>
            <img src="additional-before.png" alt="Before Image" className="side-image" />
          </div>
          <div className="arrow-middle">→</div>
          <div className="right-side">
            <p className="subtitle">My design</p>
            <img src="additional-after.png" alt="After Image" className="side-image" />
          </div>
        </div>
        <p className="figma-desc">To enhance <b>efficiency</b>, I updated the dropdown menu to open 
          automatically when hovered over. This eliminates the need for an extra click, allowing 
          users to access the menu more quickly and seamlessly.

          For <b>memorability</b>, I rearranged the settings options to separate external links from internal 
          settings. This grouping helps users recognize patterns and remember where to find specific 
          functions more easily.

          To improve <b>learnability</b>, the reorganized settings menu provides clearer navigation, helping 
          users understand where each option will take them. This reduces the risk of accidental exits 
          from the app, making the experience more intuitive.

          Finally, to enhance <b>accessibility</b>, the first menu item is now automatically focused when the 
          dropdown expands. This removes the need for extra Tab presses, making it easier for keyboard 
          users to navigate efficiently.

</p>
      </div>

      <div className={`reflection-box`}>
        <p className="reflection-text">
        The dropdown components I analyzed performed well in terms of screen readability, since all 
        options were clearly read aloud by the screen reader. I also appreciated that Slack provided an 
        informational window for keyboard shortcuts, which inspired me to incorporate a similar shortcut feature 
        into my Spotify profile design. One aspect I didn't get the chance to address in my design is 
        contrast modes, which could be beneficial for users with light sensitivity.
        </p>
        
          <p className="reflection-text">
          A key change I made in my design to reduce accessibility barriers is the keyboard shortcut (Ctrl + P) 
          for accessing the profile dropdown. Previously, keyboard users had to press Tab more than 20 times 
          to reach the dropdown, creating unnecessary friction. Another issue I noticed is that Spotify’s profile 
          dropdown only provides a hover box with the user’s name, which does not convey helpful information to 
          screen reader users. However, a positive thing I noticed was that once inside the dropdown menu, 
          detailed ARIA labels provided good descriptions of each setting, improving navigation for visually 
          impaired users.

          </p>
      
        <p className="reflection-text">
        I believe that mouse and touch/mobile users are often prioritized when designing components, 
        leaving visually and physically impaired users with limited accessibility. This gap in design 
        makes it significantly harder for these users to interact with applications as seamlessly as others.
        Moving forward, it’s important to incorporate more inclusive design practices, ensuring that all users, 
        regardless of ability, have an equally smooth experience.
        </p>
      </div>
    </section>
  );
}

export default Project;