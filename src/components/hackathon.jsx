import React from "react";
import "./hackathon.css";
import round from "../assets/round.svg";
import circle from "../assets/circle.svg";
import random from "../assets/random.svg";
import circleRound from "../assets/circle_round.svg";
import doSvg from "../assets/do.svg";
import campus from "../assets/campus.jpeg";
import kr from "../assets/kr.jpeg";
import health from "../assets/health.jpeg";
    
const HackathonCard = ({ title, description, image, lastUpdated, altText }) => {
  return (
    <div className="hackathon-card-wrapper">
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          {lastUpdated && (
            <p className="card-text mt-auto">
              <small className="text-body-secondary">{lastUpdated}</small>
            </p>
          )}
        </div>
        <img 
          src={image} 
          className="card-img-bottom hackathon-card-img" 
          alt={altText || title} 
        />
      </div>
    </div>
  );
};

// Background SVG Component
const BackgroundSvg = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`projects-bg-svg ${className}`} />
);

function Hackathon() {
  // Data for hackathon cards
  const hackathonData = [
    {
      title: "ZS Campus Beats' 25",
      description: "Out of 6000+ teams from across the country, our team has secured a spot in the Top 125 teams in the ZS Campus Beats competition! 🏆",
      image: campus,
      lastUpdated: "Last updated 3 mins ago",
      altText: "ZS Campus Beats competition"
    },
    {
      title: "KRIYETA 4.0",
      description: "Finalist of KRIYETA 4.0, a national-level 48-hour hackathon hosted by Acropolis Institute of Technology and Research, Indore!",
      image: kr,
      altText: "KRIYETA 4.0 hackathon"
    },
    {
      title: "Health-O-Tech Club - Core Member",
      description: "Led registration for 500+ tech attendees as core team member.",
      image: health,
      altText: "Health-O-Tech Club"
    }
  ];

  // Background SVG data
  const backgroundSvgs = [
    { src: round, alt: "round-shape", className: "round-svg" },
    { src: circle, alt: "circle-shape", className: "circle-svg" },
    { src: random, alt: "random-shape", className: "random-svg" },
    { src: circleRound, alt: "circle-round-shape", className: "circle-round-svg" },
    { src: doSvg, alt: "do-shape", className: "do-svg" }
  ];

  return (
    <div
      className="container-fluid con-project projects projects-bg-wrapper"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Dynamic SVG Backgrounds */}
      {backgroundSvgs.map((svg, index) => (
        <BackgroundSvg key={index} {...svg} />
      ))}

      {/* Header Section */}
      <div className="row hackathon-header">
        <div className="col-lg-6 col-md-12 text-lg-start text-center mb-3 mb-lg-0">
          <h2 className="h2 hackathon-title">
            My <span className="text-highlight">Hackathons & Community</span>
          </h2>
        </div>
        <div className="col-lg-6 col-md-12 text-lg-end text-center">
          <p className="hackathon-header-desc">
            Participation in hackathons, competitions, and tech communities
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row hackathon-row g-4">
        {hackathonData.map((hackathon, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <HackathonCard {...hackathon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hackathon;