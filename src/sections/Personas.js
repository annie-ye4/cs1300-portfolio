import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Personas() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "kiosk1.png",
      title: "Starting screen",
      caption: "There is an interactive component where the user swipes their card into the slot. This allows for the user to be identified through their ID.",
    },
    {
      src: "kiosk2.png",
      title: "Screen during an unsuccessful swipe",
      caption: "The black dots represent a student's hidden ID, and there is an eye icon next to the entry box to symbolize security from your ID being hidden. A user may recognize that their swipe was unsuccessful if there are fewer dots compared to the length of their 9-digit ID code.",
    },
    {
      src: "kiosk3.png",
      title: "Screen during a successful swipe",
      caption: "The eye icon disappears to allow space for the entire 9-digit ID code to be displayed.",
    },
    {
      src: "kiosk4.png",
      title: "Screen after swiping successfully",
      caption: "The interface shows the name of the user and how many packages they are expecting. The box for Cancel is less bolded than the Pickup Now button, probably because it is not expected for a user to need to cancel after swiping.",
    },
    {
      src: "kiosk5.png",
      title: "Screen after clicking Pickup Now",
      caption: "There is a message displayed to let the user know where to go next after using the kiosk successfully. The company logos on the bottom of the screen stay throughout the entire experience.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="personas" className="personas-section">
      <div className="heading">
        <h1>Personas & Storyboarding</h1>
        <p className="description">
          Have you ever experienced difficulty while using the Brown University Mailroom Kiosk?
          This project explores the usability of the mailroom kiosk, a public interface used by
          students to retrieve packages. Through user interviews, observations, personas, and
          storyboarding, this study identifies key pain points and areas for improvements. First,
          I created sketches to visualize a typical user experience at the kiosk, pictured below. 
        </p>
      </div>

      {/* Image Carousel */}
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>&#9664;</button>
        <div className="carousel">
          <h2>{images[currentIndex].title}</h2>
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
          <p className="caption">{images[currentIndex].caption}</p>
        </div>
        <button className="arrow right" onClick={handleNext}>&#9654;</button>
      </div>

      <div className="interview-section">
        <h2>Interviews</h2>
        <p className="caption">
          I conducted interviews with students who have used the kiosk to understand their
          experiences and pain points. I asked questions about their familiarity with the kiosk,
          their typical experience, and any difficulties they faced. I found that users often 
          struggled with swiping their cards, usually needing multiple attempts or having to switch 
          kiosks to successfully log in. 
        </p>
        <p className="
          caption">
          I also observed students in the mailroom and found that despite the occasional technical glitch, most users completed 
          transactions quickly and efficiently, typically within a minute. The interface's navigation process was intuitive 
          and users were able to navigate it without much hesitation. When faced with malfunctions, 
          users either retried the action or switched kiosks rather than seeking assistance. 
        </p>
      </div>

      <div className="interview-questions">
        <div className="question">
          <p className="the-question">Can you walk me through your typical experience using the kiosk? </p>
          <p className="answer">- Issues with swiping cards, requiring multiple attempts or switching kiosks.
          <p className="answer">- Process is quick with no technical difficulties.</p>
          <p className="answer">- Indoor kiosk is preferred due to shorter lines.</p>
</p>
        </div>
        <div className="question">
          <p className="the-question">Before using the kiosk for the first time, what information or guidance did you receive?</p>
          <p className="answer">- Most received no formal guidance</p>
          <p className="answer"> - One learned from a Bruno leader and by observing a friend 
</p>
        </div>
        <div className="question">
          <p className="the-question">Can you describe a time when you had trouble navigating the kiosk? What happened?</p>
          <p className="answer">- Most common issue is card swiping failures, requiring multiple swipe attempts. </p>
          <p className="answer">- Screen does not progress after swiping sometimes. </p>
          <p className="answer">- Only partial ID numbers display 
</p>
        </div>
        <div className="question">
          <p className="the-question">If you were explaining how to use this kiosk to a new student, what aspects would you emphasize as easy or challenging?</p>
          <p className="answer">- Swiping is challenging with worn-out cards. </p> 
          <p className="answer">- Crowding because there are only three kiosks. </p>
          <p className="answer">- System is generally easy to use.
</p>
        </div>
      </div>

      <div className="interview-questions">
        <div className="question">
          <p className="the-question">How long does it typically take you to complete a transaction at the kiosk? Does this meet your expectations?</p>
          <p className="answer">- Most complete transactions in about a minute and think the time meets expectations. </p>
          <p className="answer">- If there are technical issues, some feel like it should be faster.
</p>
        </div>
        <div className="question">
          <p className="the-question">Do you find the kiosk responsive to your inputs (e.g., swiping, typing, screen buttons)?</p>
          <p className="answer">- Swiping is the main issue. </p>
          <p className="answer">- Button responsiveness is good, but "next" button freezes sometimes. </p>
        </div>
        <div className="question">
          <p className="the-question">Does the screen size, text size, or button placement ever make it difficult to interact with the interface?</p>
          <p className="answer">- Most users find the screen and text size sufficient </p>
          <p className="answer">- Suggestion for increasing the text size for package counts.

</p>
        </div>
        <div className="question">
          <p className="the-question">Do you feel the kiosk does enough to protect your privacy and security? Why or why not?</p>
          <p className="answer">- Some think that privacy is well-protected since only the first name and package count are displayed. </p>
          <p className="answer">- System doesn't show full ID numbers.</p>
          <p className="answer">- Concern that if someone had their ID card, they could access packages.
          </p>
        </div>
      </div>

      <div className="personas">
  <h2>Personas</h2>
  <p className="caption">
    Based on the interviews, I created two personas to represent the primary users of the kiosk. The personas will represent
    the spectrum of users I observed and interviewed. 
  </p>

  <div className="personas-container"> {/* New wrapper for side-by-side layout */}
    <div className="persona">
      <p className="personas-description">
        The first persona, “Frustrated Felix,” is a busy college student juggling classes, extracurriculars, and a part-time job. 
        He’s usually in a hurry when picking up his packages and expects the process to be quick. However, he often struggles with 
        swiping his student ID, sometimes having to switch kiosks or retry multiple times.Felix represents users who experience 
        frequent technical difficulties and wish for a more seamless process. 
      </p>
      <img src="felix.png" alt="Frustrated Felix" />
    </div>

    <div className="persona">
      <p className="personas-description">
        The second persona, “Efficient Ella,”  is a well-organized upperclassman who has been using 
        the mailroom kiosk for years. She prefers the less crowded indoor kiosk and completed transactions 
        quickly without issue. Ella rarely experiences technical difficulties but knows how to navigate minor
         glitches if they arise. Ella represents confident users who rely on the system 
         working smoothly and efficiently. 

      </p>
      <img src="ella.png" alt="Efficient Ella" />
    </div>
  </div>
</div>
    <div className="storyboard">
    <h2>Storyboard</h2>
    <p className="caption">
      To visualize the user experience, I created a storyboard that illustrates the steps a user, with a persona like "Frustrated Felix." might take when 
      picking up a package. The storyboard highlights the challenging interactions that users have with the kiosk.
    </p>
    <img src="storyboard.png" alt="Storyboard" />
  </div>

  <div className="conclusion">
    <h2>Conclusion</h2>
    <p className="caption">
    Picking up a package should be quick and seamless, but for many Brown University students, the 
    mailroom kiosk adds unnecessary frustration. My study revealed that swiping issues are the biggest hurdle—
    students often need multiple attempts or switch kiosks to log in. Other than that, most navigate the 
    system efficiently, relying on trial and error rather than needing to seek help.
    </p>
    <p className="caption">

    A surprising finding was that there were definitely some user errors that slowed down the experience for
    users. For example, some users would swipe their card too quickly or too slowly, or in the wrong direction,
    which would cause the system to not recognize their card. One person would also frequently forget to click "Next". 
    </p>
    <p className="caption">
    Ultimately, small usability issues can create big inefficiencies. Improving swipe recognition or 
    offering alternative login methods could make the system as smooth as intended—because grabbing a 
    package shouldn’t feel like troubleshooting a glitch.  
    </p>
  </div>
    </section>
  );
}

export default Personas;
