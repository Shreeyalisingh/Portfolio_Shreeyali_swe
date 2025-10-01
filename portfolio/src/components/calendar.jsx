

import React from "react";
import "./calendar.css";
import GitHubCalendar from 'react-github-calendar';
import round from "../assets/round.svg";
import circle from "../assets/circle.svg";
import random from "../assets/random.svg";
import circleRound from "../assets/circle_round.svg";
import doSvg from "../assets/do.svg";

function Calendar() {
  return (
    <div className="container-fluid calendar text-start projects-bg-wrapper" style={{position: 'relative', overflow: 'hidden'}}>
      {/* SVG Backgrounds */}
      <img src={round} alt="round-shape" className="projects-bg-svg round-svg" />
      <img src={circle} alt="circle-shape" className="projects-bg-svg circle-svg" />
      <img src={random} alt="random-shape" className="projects-bg-svg random-svg" />
      <img src={circleRound} alt="circle-round-shape" className="projects-bg-svg circle-round-svg" />
      <img src={doSvg} alt="do-shape" className="projects-bg-svg do-svg" />
      <h1 className="calendar-title">
        Days I <span className="text">code</span>
      </h1>
      <div className="github-calendar">
        <GitHubCalendar 
          username="Shreeyalisingh" 
          blockSize={16} 
          blockMargin={5} 
          fontSize={16} 
          colorScheme="light" 
          theme={{
            light: ["#ebedf0", "#6f42c1", "#6f42c1", "#6f42c1", "#6f42c1"],
            dark: ["#161b22", "#6f42c1", "#6f42c1", "#6f42c1", "#6f42c1"]
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;
