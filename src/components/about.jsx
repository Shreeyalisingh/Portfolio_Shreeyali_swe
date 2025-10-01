import React from "react";
import { Github, Linkedin } from "lucide-react";
import "./about.css"; // Ensure you have the correct path to your CSS file
import lines from "../assets/line.svg";
import downlines from "../assets/down.svg";
import shree from "../assets/shree1.png";
import quotes from "../assets/quotes.svg";
import shreeyali from "../assets/shree.pdf";

function About() {
  const handleResumeClick = () => {
    window.open(shreeyali, "_blank");
  };

  return (
    <div className="about-container" id="about">
      {/* Header Section */}
      <div className="header-section">
        <button className="hello-btn">Hello!</button>
        <img src={lines} alt="lines" className="header-lines" />
        <h1 className="main-heading">
          I'm <span className="name-highlight">Shreeyali,</span>
          <br />
          <span className="software-text">
            S
            <img
              src={downlines}
              alt="downlines"
              className="underline-decoration"
            />
            oftware Developer
          </span>
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Quote Section - Hidden on small screens */}
        <div className="quote-section">
          <img src={quotes} alt="quotes" className="quote-icon" />
          <p className="quote-text">
            If the route doesn't take you there,<br />
            redraw the map -- not the goal!
          </p>
        </div>

        {/* Central Image Section - Always prominent */}
        <div className="image-section">
          {/* Mobile Resume Button - Only visible on mobile */}
          <button className="mobile-resume-btn" onClick={handleResumeClick}>
            <span className="resume-text">
              Check out<br />my<br />Resume!
            </span>
          </button>

          <div className="image-wrapper">
            <div className="semi-circle-bg"></div>
            <img src={shree} alt="Shreeyali" className="profile-image" />

            {/* Social Media Buttons */}
            <div className="social-buttons">
              <button
                className="social-btn github-btn"
                onClick={() => window.open("https://github.com/Shreeyalisingh", "_blank")}
                aria-label="GitHub Profile"
              >
                <Github size={20} color="#ffffff" />
              </button>
              <button
                className="social-btn linkedin-btn"
                onClick={() => window.open("https://www.linkedin.com/in/shreeyali-singh26/", "_blank")}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} color="#ffffff" />
              </button>
            </div>
          </div>
        </div>

        {/* Resume and Info Section */}
        <div className="resume-info-section">
          <button className="floating-resume-btn" onClick={handleResumeClick}>
            <span className="resume-text">
              Check out<br />my<br />Resume!
            </span>
          </button>
          
          <div className="current-status">
            <p>
              Present<br />
              VIT Bhopal University<br />
              Student
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;