import React from 'react';
import "./skills.css";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import bootstrap from "../assets/bootstrap.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import sql from "../assets/sql.svg";
import rest from "../assets/rest.svg";
import mongo from "../assets/mongo.svg";
import java from "../assets/java.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import aws from "../assets/aws.svg";
import docker from "../assets/docker.svg";
import figma from "../assets/figma.svg";
import postman from "../assets/postman.svg";
import tailwind from "../assets/tailwind.svg";
function Skills() {
    return ( 
        <>
    <div className="container mt-5 text-center" id="skills">
            <h2 style={{fontWeight:"bold", fontSize:"2rem"}}>Let's have a look at my <span className="text">Skills</span></h2>
            <div className="row">
                <div className="col-4 skill-card mt-5 frontend-card">
                    <h2 className="frontend-title">Frontend Development</h2>
                    <div className="frontend-underline"><hr/></div>
                    <div className="frontend-skills-grid">
                        <div className="frontend-skill">
                            <img src={html} alt="HTML5" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">HTML5</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={react} alt="React" className="frontend-icon" />

                            <div>
                                <span className="frontend-skill-title">React</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={css} alt="CSS3" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">CSS3</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={bootstrap} alt="Bootstrap" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Bootstrap</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={js} alt="JavaScript" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">JavaScript</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={tailwind} alt="Tailwind CSS" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Tailwind</span>
                                <div className="frontend-skill-level">Intermediate</div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-4 skill-card mt-5 frontend-card">
                    <h2 className="frontend-title">Backend Development</h2>
                    <div className="frontend-underline"><hr/></div>
                    <div className="frontend-skills-grid">
                        <div className="frontend-skill">
                            <img src={node} alt="Node.js" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Node.js</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={sql} alt="SQL" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">SQL</span>
                                <div className="frontend-skill-level">Intermediate</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={mongo} alt="MongoDB" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">MongoDB</span>
                                <div className="frontend-skill-level">Intermediate</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={express} alt="Express.js" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Express.js</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={rest} alt="JavaScript" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">REST APIs</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={java} alt="Java" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Java</span>
                                <div className="frontend-skill-level">Intermediate</div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-4 skill-card mt-5 frontend-card">
                    <h2 className="frontend-title">Tools and Technology</h2>
                    <div className="frontend-underline"><hr/></div>
                    <div className="frontend-skills-grid">
                        <div className="frontend-skill">
                            <img src={git} alt="Git" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Git</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={postman} alt="Postman" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Postman</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={github} alt="Github" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Github</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={aws} alt="AWS" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">AWS</span>
                                <div className="frontend-skill-level">Intermediate</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={figma} alt="Figma" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Figma</span>
                                <div className="frontend-skill-level">Advanced</div>
                            </div>
                        </div>
                        <div className="frontend-skill">
                            <img src={docker} alt="Docker" className="frontend-icon" />
                            <div>
                                <span className="frontend-skill-title">Docker</span>
                                <div className="frontend-skill-level">Intermediate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Skills;