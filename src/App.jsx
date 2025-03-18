import { useState } from 'react'
import NavBar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import SkillCard from './components/SkillCard'
import './App.css'

function App() {

return (
    <>
        <NavBar />
      
        <div id="home" className='font-mono'>
            <header>
                <h1>Welcome to My Portfolio</h1>
                <p>Hi 🖐, I'm Aritra, an aspiring engineer</p>
            </header>
            <section id="about">
                <h2>About Me</h2>
                <p>
                    I am a passionate engineering undergraduate student who loves to code and build things. I am proficient in Python, JavaScript, C, and C++. I am currently looking for internships and opportunities to work on exciting projects.
                </p>
                <p>
                    I am currently pursuing my Bachelor's degree in Electrical Engineering from the Indian Institute of Technology, Dhanbad. I have completed various projects in the field of game development, web development, machine learning, and IoT. I am also a competitive programmer and have participated in various coding contests on codeforces.
                </p>
            </section>
            <section id="projects" className='projects'>
                <h2>My Projects</h2>
                <h3>Software Developement Projects</h3>
                <div className="projects-container">
                    {[
                        { title: "ML Algorithms from scratch", description: "Implementation of various machine learning algorithms from scratch", imageUrl: "My-React-Portfolio/src/assets/ml_from_scratch.jpg", projectUrl: "https://example.com" },
                        { title: "Pathfinding Algorithm Visualizer", description: "A Unity 3D Project to visualize various pathfinding algorithms", imageUrl: "My-React-Portfolio/src/assets/algo_viz.gif", projectUrl: "https://example.com" },
                        { title: "Quantum Squares", description: "A two-player web based game developed using HTML, CSS, and JavaScript", imageUrl: "My-React-Portfolio/src/assets/quantum_sq.gif", projectUrl: "https://example.com" }
                    ].map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <h3>Electrical/Electronics Projects</h3>
                <div className="projects-container">
                    {[
                        { title: "Arduino based Battery Monitor", description: "A compact PCB design to monitor battery voltage using Arduino", imageUrl: "My-React-Portfolio/src/assets/pcb.png", projectUrl: "https://example.com" },
                        { title: "Satellite Attitude Control System", description: "A MATLAB simulation to control the attitude of a satellite", imageUrl: "My-React-Portfolio/src/assets/sat_control.jpg", projectUrl: "https://example.com" },
                        { title: "AM Radio Communication System Simulation", description: "An LTSpice simulation of an AM radio communication system", imageUrl: "My-React-Portfolio/src/assets/Graph.png", projectUrl: "https://example.com" },
                    ].map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
            <section id="skills">
                <h2>Technologies & Frameworks</h2>
                <div className="skills-container">
                    {[
                        "c-lang", "Cpp", "C_sharp", "HTML", "CSS", "javascript", "react", "bootstrap", "tailwind", "MySQL", "Git", "GitHub", "unity","Python", "TensorFlow"
                    ].map((skill, index) => (
                        <SkillCard key={index} title={skill} imageUrl={`My-React-Portfolio/src/assets/${skill.toLowerCase().replace(/\s/g, '_')}.png`} />
                    ))}
                </div>
                <div className="skills-container">
                    {[
                        "Proteus", "LTSpice", "LabVIEW", "EasyEDA", "KiCad", "Matlab", "Simulink"
                    ].map((skill, index) => (
                        <SkillCard key={index} title={skill} imageUrl={`My-React-Portfolio/src/assets/${skill.toLowerCase().replace(/\s/g, '_')}.png`} />
                    ))}
                </div>
            </section>
            <footer id="contact">
                <h2>Let's Connect!</h2>
                <div className="wrapper">
                    {[
                        { icon: "fa-solid fa-envelope", link: "#" },
                        { icon: "fa-brands fa-linkedin-in", link: "#" },
                        { icon: "fa-brands fa-github", link: "#" }
                    ].map((contact, index) => (
                        <a key={index} href={contact.link} className="icon"><i className={`${contact.icon}`}></i></a>
                    ))}
                </div>
                <p>© 2025 Aritra Bera</p>
            </footer>
        </div>
    </>
)
}

export default App
