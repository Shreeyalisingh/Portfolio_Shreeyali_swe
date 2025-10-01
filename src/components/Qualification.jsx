import React from 'react';
import "./Qualification.css"; // Assuming you have a CSS file for styles

const TimelineResume = () => {
  const experiences = [
    {
      company: "Zyntriq AI",
      location: "Nodia, India",
      period: "March 2025 - June 2025",
      position: "Full Stack Developer Intern",
      description: "Built and deployed various full stack including both web and app."
    },
    {
      company: "Expediean eSolution",
      location: "Nodia, India",
      period: "Dec 2024 - Jan 2025",
      position: "Software Developer Intern",
      description: "Developed and tested various application and automated various projects by creating CI/CD pipelines "
    },
    {
      company: "Internshala Trainings",
      location: "Online",
      period: "Jan 2025 - July 2025",
      position: "Full Stack Developer Course with Placement",
      description: "Completed full stack course: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB. Built real-world projects and earned certification."
    },
    {
      company: "Vellore Institute of Technology",
      location: "Bhopal, India",
      period: "Nov 2022 - Oct 2026",
      position: "Bachelor of Technology in Computer Science and Engineering",
      description: "B.Tech in Computer Science and Engineering, CGPA: 8.36/10. Coursework in data structures, algorithms, and web development."
    }
  ];

  return (
  <div className="container-fluid py-5 text-center mt-5" id="qualifications">
    <h1 >My <span className='text-highlight'>Qualifications</span></h1>
    <p className='mb-5'>My professional journey</p>
      <div className="container text-start">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="timeline-container position-relative">
              {/* Timeline items */}
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item mb-5 position-relative">
                  <div className="row align-items-start">
                    {/* Left side - Company info (Desktop) */}
                    <div className="col-md-4 d-none d-md-block">
                      <div className="company-info text-end pe-4">
                        <h4 className="mb-1 text-dark fw-bold">{exp.company}</h4>
                        <p className="text-muted mb-1 small">{exp.location}</p>
                        <p className="text-muted mb-0 small">
                          <i className="fas fa-calendar me-1"></i>
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="col-md-1 d-flex justify-content-center position-relative px-0">
                      {/* Timeline line for desktop (inside dot column) */}
                      {/* Dotted line starts and ends at the center of each dot */}
                      <div 
                        className="timeline-line position-absolute d-none d-md-block" 
                        style={{
                          left: '50%',
                          top: '24px', // 8px (dot top) + 8px (dot radius)
                          bottom: '-24px', // 8px (dot top) + 8px (dot radius)
                          width: '2px',
                          backgroundColor: 'transparent',
                          borderLeft: '2px dotted #6f42c1',
                          zIndex: 1,
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                      {/* Timeline line for mobile (inside dot column) */}
                      <div 
                        className="timeline-line-mobile position-absolute d-md-none" 
                        style={{
                          left: '27px', // 20px (dot left) + 7px (dot radius)
                          top: '22px', // 8px (dot top) + 7px (dot radius)
                          bottom: '-22px',
                          width: '2px',
                          backgroundColor: 'transparent',
                          borderLeft: '2px dotted #6f42c1',
                          zIndex: 1,
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                      {/* Desktop dot */}
                      <div 
                        className="timeline-dot rounded-circle position-absolute d-none d-md-flex align-items-center justify-content-center"
                        style={{
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#6f42c1',
                          border: '4px solid white',
                          boxShadow: '0 0 0 2px #6f42c1',
                          zIndex: 2,
                          left: '50%',
                          top: '8px',
                          transform: 'translate(-50%, 0)'
                        }}
                      ></div>
                      {/* Mobile dot */}
                      <div 
                        className="timeline-dot-mobile rounded-circle position-absolute d-md-none"
                        style={{
                          width: '14px',
                          height: '14px',
                          backgroundColor: '#6f42c1',
                          border: '3px solid white',
                          boxShadow: '0 0 0 2px #6f42c1',
                          left: '20px',
                          top: '8px',
                          zIndex: 2,
                          transform: 'translate(-50%, 0)'
                        }}
                      ></div>
                    </div>

                    {/* Right side - Position details (Desktop) */}
                    <div className="col-md-7 d-none d-md-block">
                      <div className="position-info ps-4">
                        <h3 className="mb-3 text-position fw-bold">{exp.position}</h3>
                        <p className="text-muted mb-0 lh-base">{exp.description}</p>
                      </div>
                    </div>

                    {/* Mobile content - Full width */}
                    <div className="col-12 d-md-none ps-4">
                      <div className="timeline-content-mobile">
                        <h4 className="mb-1 text-dark fw-bold">{exp.company}</h4>
                        <p className="text-muted mb-1 small">{exp.location}</p>
                        <p className="text-muted mb-3 small">
                          <i className="fas fa-calendar me-1"></i>
                          {exp.period}
                        </p>
                        <h5 className="mb-2 text-primary fw-bold">{exp.position}</h5>
                        <p className="text-muted mb-0 lh-base">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineResume;