import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Iterative() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
          src: "balsamiq1.png",
        },
        {
          src: "balsamiq2.png",
        },
        {
          src: "balsamiq3.png",
        },
        {
          src: "balsamiq4.png",
        },
      ];
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
  return (
      <section id="iterative" className="redesign-section">
          <h1>Iterative Redesign</h1>
          <p className="description">What does it take to build trust in a platform that promises to save you 
            tens of thousands of dollars? That’s the question that guided our team as we took on the challenge 
            of redesigning Bramble’s desktop website. As a new real estate brokerage with bold claims and 
            cutting-edge technology, Bramble needs an interface that not only reflects its innovation but 
            also instills confidence in buyers and sellers navigating one of the most important decisions of 
            their lives.</p>

      <div className="conclusion-containerp">
        <h2>What is Bramble?</h2>
        <p>Bramble is a modern, AI-powered real estate brokerage that offers end-to-end home buying/selling 
            services for a flat fee, replacing the traditional 2-3% agent commission with a simpler, cheaper model. 
            Buyers receive a substantial rebate (averaging $20,000) while still benefiting from human agent 
            support. Notable features include: <p></p>

            - AI semantic search to match listings to user intent <br></br>
            - AI-generated video tours based on listing photographs <br></br>
            - Flat-fee structure that promotes affordability and transparency <br></br>
            - Licensed human agent for guidance </p>
        
        <h2>Design Challenges</h2>
        <p><strong>We wanted the interface to reflect the innovative nature of Bramble, while establishing trust</strong>–
            especially for users encountering these ideas for the first time. Selling or buying a home is a big 
            deal, and we needed users to feel confident using a new platform that introduces such a different 
            model. <strong>How can we emphasize what makes Bramble new and exciting while keeping the experience 
            grounded and reliable? </strong>The specific goals we agreed on as a team to achieve that balance 
            and bring Bramble’s functionality to life were: <p></p>

            - <strong>Highlight the flat-fee rebate model early and clearly</strong>, since it’s 
            one of Bramble’s primary selling points <br></br>
            - <strong>Make the search experience intuitive and guided</strong>, so new users aren’t 
            intimidated by the website <br></br>
            - <strong>Promote buyer and seller agency; the interface should make users feel in control </strong>
            of their journey from start to finish</p>
        </div>

        <div className="conclusion-containerp">
        <h2>Exploring Diverse Layouts</h2>
        <p>To begin our design process, each member of our team brainstormed a distinct 
            design for Bramble’s desktop interface. Each set of sketches focused on 
            exploring different layouts, visual hierarchies, and flows for the core user 
            actions we established in the form of a home page, explore page, and FAQ page! 
            (Note: I worked specifically on sketch 3) </p>
        
        <h2>Home Page Sketches</h2>
        <img src="homepage-sketch.png" alt="Homepage Sketches" className="style-guidep" />

        <h2>Explore Page Sketches</h2>
        <img src="explore-page.png" alt="Homepage Sketches" className="style-guidep" />

        <h2>FAQ Page Sketches</h2>
        <img src="faq-page.png" alt="Homepage Sketches" className="style-guidep" />

        <h2>Bringing It All Together with a Wireframe
        </h2>
        <p>After generating four distinct design concepts, we combined the strongest elements 
            from each to create a cohesive, user-centered desktop interface for Bramble. Our 
            final wireframes reflect intentional decisions drawn from our diverse sketches, 
            balancing clarity, trust, and innovation. (Note: I created the two search pages as well as the FAQ page)</p>
            <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>&#9664;</button>
        <div className="carousel">
          <h2>{images[currentIndex].title}</h2>
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
          <p className="caption">{images[currentIndex].caption}</p>
        </div>
        <button className="arrow right" onClick={handleNext}>&#9654;</button>
      </div>    

      <h2>Features We Kept
        </h2>
        <p>- <strong>Central search bar </strong>(Designs 1 & 2) for intuitive access to Bramble’s AI-powered search<br></br>
- <strong>Visuals & illustrations</strong> (Design 4) to create emotional appeal and warmth<br></br>
- <strong>Property type selector </strong>(Design 1) to <strong>reduce decision fatigue and support varied user flows</strong><br></br>
- <strong>Filter panel</strong> (Design 3) to organize search criteria in a clear, scrollable layout<br></br>
- Savings highlights & <strong>testimonials</strong> (Design 4) to clearly communicate Bramble’s value<br></br>
- <strong>Minimalist navigation bar</strong> (Design 1) for a <strong>clean layout </strong>that emphasizes visuals<br></br>
- <strong>Listing cards </strong>(Design 3) for easy comparison of key home details<br></br>
- <strong>Sectioned FAQ</strong> (Design 2) to <strong>visually guide users</strong> through grouped content<br></br>
- <strong>Accordion FAQ layout</strong> (Designs 1, 2 & 3) for organized, accessible support content</p>    
      </div>

      <div className="conclusion-containerp">
        <h2>Incorporating Feedback Into Prototype</h2>
        <p>When developing our figma prototype, we sought feedback from TAs. This is what we learned: <p></p>
        - In our initial wireframe, we only had one screen on the homepage that was set at the normal screen 
        size and was not scrollable. However when we presented this screen to the TA, she felt like the 
        <strong>information was overwhelming </strong>so we <strong>took advantage of a scrollable homescreen</strong> when we created the 
        hifi figma design. Instead of having a home screen with a short description of the company, 
        search page, how to guide, and a house sold by Bramble in one frame, <strong>we decided to have the 
        opening frame be the brand message, search bar, and description of the differentiating features </strong>at 
        Bramble. Then below that we added a how to guide and a house thats ready to be sold. <br></br>
- The TA also mentioned that looking at our wireframe she did not understand how Bramble leveraged AI on 
its platform to increase the efficiency of the home buying process. So to clarify the confusion we added a 
section to the homepage describing Bramble’s AI workflows. <br></br>
- The TA recommend including visuals to the how to guide, however we felt that it would crowd the 
section and that our descriptions were clear enough. <br></br>
- In our wireframe, the house cards were not clearly clickable, so we added an expand button to 
indicate that users can open them.<br></br>
- We also shared with the TA our plans for including our about and sell page to the hifi prototype 
and received positive feedback.
        </p>
        </div>

    <div className="conclusion-containerp">
        <h2>Developing High Fidelity Prototype</h2>
        <p>
  Based on the feedback we received, we updated our prototype. Click below to watch a video walkthrough of our{" "}
  <a href="https://www.figma.com/design/cdmBPoEdaBVBXdPVAz6M8B/Bramble-Iterative-Design?node-id=0-1&p=f&t=seY70YvbVE7d5hPP-0" target="_blank" rel="noopener noreferrer">
    Figma prototype
  </a>.
</p>    </div>
        </section>
  );
}
export default Iterative;