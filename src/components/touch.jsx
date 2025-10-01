import React from 'react';
import "./touch.css"
function Touch() {
    const touch = [
        {
            icon: <i className="fa-solid fa-envelope"></i>,
            title: "Email",
            description: "Shreeyalisingh26@gmail.com",
            link: "mailto:Shreeyalisingh26@gmail.com"
        },
        {
            icon: <i className="fa-brands fa-linkedin-in"></i>,
            title: "LinkedIn",
            description: "linkedin.com/in/shreeyali-singh26/",
            link: "https://www.linkedin.com/in/shreeyali-singh26/"
        },
        {
            icon: <i className="fa-brands fa-github"></i>,
            title: "GitHub",
            description: "github.com/shreeyalisingh",
            link: "https://github.com/Shreeyalisingh"
        },
        {
            icon: <i className="fa-brands fa-instagram"></i>,
            title: "Instagram",
            description: "@shreelytical",
            link: "https://www.instagram.com/shreelytical/"
        }
    ];

    return (
        <>  
            <style>{`
             
            `}</style>

            <div className="container-fluid py-5" id="contact">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="touch-title">Get in Touch</h1>
                        <p className="touch-description px-3">
                            I would love to hear from you! Please reach out if you have any questions or just want to chat.
                        </p>
                    </div>
                    
                    <div className="row g-3 g-md-4">
                        {touch.map((item, index) => (
                            <div 
                                className="col-12 col-sm-6 col-lg-3 text-center" 
                                key={index}
                            >
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="touch-item d-block h-100"
                                    aria-label={`Contact via ${item.title}: ${item.description}`}
                                >
                                    <div className="touch-icon" aria-hidden="true">
                                        {item.icon}
                                    </div>
                                    <h3 className="touch-title">{item.title}</h3>
                                    <p className="touch-description">{item.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Touch;