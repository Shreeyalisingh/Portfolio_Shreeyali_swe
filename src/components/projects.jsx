import React from "react";
import "./projects.css";
import travel from "../assets/travelmate.png";
import swaphub from "../assets/swaphub.png";
import kiara from "../assets/kiara.png";
import tumor from "../assets/tumor.jpeg";
import round from "../assets/round.svg";
import circle from "../assets/circle.svg";
import random from "../assets/random.svg";
import circleRound from "../assets/circle_round.svg";
import doSvg from "../assets/do.svg";
import paw from "../assets/paw.png";

function Projects() {
  return (
    <div className="container-fluid con-project text-center projects projects-bg-wrapper" id="projects" style={{position: 'relative', overflow: 'hidden'}}>
      {/* SVG Backgrounds */}
      <img src={round} alt="round-shape" className="projects-bg-svg round-svg" />
      <img src={circle} alt="circle-shape" className="projects-bg-svg circle-svg" />
      <img src={random} alt="random-shape" className="projects-bg-svg random-svg" />
      <img src={circleRound} alt="circle-round-shape" className="projects-bg-svg circle-round-svg" />
      <img src={doSvg} alt="do-shape" className="projects-bg-svg do-svg" />
      <h2 className="h2">
        My <span className="text">Projects</span>
      </h2>
      Recent Works and Contribution
      <div className="container con-project mt-5">
        <div className="carousel-outer">
          <button
            className="carousel-arrow carousel-arrow-left"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <div id="carouselExample" className="carousel carousel-fade">
            <div className="carousel-inner">
              <div
                className="card mb-3 text-start carousel-item  carousel-card"
                style={{ maxWidth: "856px", height: "280px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={travel}
                      className="rounded-start"
                      alt="TravelMate"
                      style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "cover",
                        borderRadius: "20px 0 0 20px",
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Travelmate</h5>
                      <p className="card-text">
                        TravelMate is a travel companion web application that
                        helps users plan and explore destinations with the help
                        of interactive maps, geocoding capabilities, media
                        uploads, and more. Built using modern web technologies,
                        TravelMate delivers an intuitive and responsive
                        interface for travelers to share and document their
                        journeys.
                      </p>
                      <p className="card-text">
                        <a
                          href="https://github.com/Shreeyalisingh/travelmate"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn">Github</button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 text-start carousel-item carousel-card"
                style={{ maxWidth: "856px", height: "280px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={swaphub}
                      className="rounded-start"
                      alt="SwapHub"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px 0 0 20px",
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">SwapHub</h5>
                      <p className="card-text">
                        A MERN Stack-based web application tailored for college
                        campuses, SWAPHUB serves as a digital marketplace for
                        students to buy, sell, and donate goods with ease. It
                        enhances student engagement through a clean UI/UX,
                        real-time features, and secure authentication.
                      </p>
                      <p className="card-text">
                        <a
                          href="https://github.com/Shreeyalisingh/SwapHub"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn">Github</button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card mb-3 text-start carousel-item carousel-card"
                style={{ maxWidth: "856px", height: "280px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={tumor}
                      className="rounded-start"
                      alt="Tumor Detection"
                      style={{
                        width: "100%",
                        height: "69%",
                        objectFit: "cover",
                        borderRadius: "20px 0 0 20px",
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        Brain Tumor MRI Classification
                      </h5>
                      <p className="card-text">
                        A deep learning project for classifying brain tumor
                        types from MRI images using Convolutional Neural
                        Networks (CNN). This project can distinguish between
                        four categories: Glioma, Meningioma, No Tumor, and
                        Pituitary tumors.
                      </p>
                      <p className="card-text">
                        <a
                          href="https://github.com/Shreeyalisingh/braintumor"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn">Github</button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card mb-3 text-start carousel-item active carousel-card"
                style={{ maxWidth: "856px", height: "280px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={kiara}
                      className="rounded-start"
                      alt="Kiara"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px 0 0 20px",
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Kiara</h5>
                      <p className="card-text">
                        Kiara is a modern, stylish, and full-featured e-commerce
                        website built with Node.js, Express, EJS, and MongoDB.
                        It enables users to browse products, manage a shopping
                        cart, register/login, and complete purchases. The admin
                        panel allows for product and user management.
                      </p>
                      <p className="card-text">
                        <a
                          href="https://github.com/Shreeyalisingh/kiara"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn">Github</button>
                        </a>
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
                <div
                className="card mb-3 text-start carousel-item carousel-card"
                style={{ maxWidth: "856px", height: "280px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={paw}
                      className="rounded-start"
                      alt="PawVadiya"
                      style={{
                        width: "100%",
                        height: "69%",
                        objectFit: "cover",
                        borderRadius: "20px 0 0 20px",
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        PawVaidya
                      </h5>
                      <p className="card-text">
                        PawVaidya is a veterinary healthcare management system designed to streamline the care, treatment, and tracking of pets and animals. Built with love for animals and passion for technology, this platform aims to assist pet owners and vets by providing a centralized platform for appointments, medical history, prescriptions, and more.
                      </p>
                      <p className="card-text">
                        <a
                          href="https://github.com/Shreeyalisingh/pawVaidya"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn">Github</button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-arrow carousel-arrow-right"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;


