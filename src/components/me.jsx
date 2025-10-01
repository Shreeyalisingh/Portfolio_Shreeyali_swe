// Me.js
import React from "react";
import "./me.css";
import shree from "../assets/shree.pdf";
import shreeyali from "../assets/shree1.png";

function Me() {
  return (
    <>
  <div className="container-fluid row me-container mt-5" id="events">
        <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
            <img src={shreeyali} alt="Shreeyali" className="me-image img-fluid" />
        </div>
        <div className="col-12 col-lg-7 text-center text-lg-start">
          <h1>
            About <span className="text-highlight">Me</span>
          </h1>
          <div className="row mt-3 justify-content-center justify-content-lg-start">
            <div className="col-10 col-sm-4 col-lg-2 about-box text-center mb-3 mb-lg-0">
              <i className="fa-solid fa-suitcase"></i>
              <br />
              Internships
              <p className="aa mt-2">1 completed</p>
            </div>
            <div className="col-10 col-sm-4 col-lg-2 offset-sm-0 offset-lg-1 about-box text-center mb-3 mb-lg-0">
              <i className="fa-solid fa-code"></i>
              <br />
              Practices
              <p className="aa mt-2">5+ projects</p>
            </div>
            <div className="col-10 col-sm-4 col-lg-2 offset-sm-0 offset-lg-1 about-box text-center mb-3 mb-lg-0">
              <i className="fa-solid fa-user-group"></i>
              <br />
              Collaboration
              <p className="aa mt-2">open to teamup</p>
            </div>
          </div>
          <p className="mt-4 mt-lg-5 about-para">
            Full Stack Developer passionate about building clean,<br className="d-none d-lg-block" /> 
            user-friendly web apps with React and modern UI/UX
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mt-4">
            <a href="mailto:shreeyalisingh26@gmail.com">
              <button className="btn btn-secondary about-btn">
                <i className="fa-solid fa-envelope about-icon me-2" style={{backgroundColor:"#ffffff"}}></i> 
                Hire Me
              </button>
            </a>
            <a href={shree} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary about-btn">
                <i className="fa-solid fa-download about-icon me-2" style={{backgroundColor:"#ffffff"}}></i> 
                Get my resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;