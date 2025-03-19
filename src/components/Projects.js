import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: "SafeCrop",
      description: "SafeCrop is an IoT-based full-stack project designed to protect crops from elephant intrusions. This group project integrates IoT devices to detect elephant movements and trigger preventive measures, ensuring the safety of farmlands. The system includes real-time monitoring, automated alerts, and a user-friendly interface for farmers to track activity and take necessary action.",
      technologies: ["Flutter", "Flask", "Html/Css/Boostrap", "Firebase"],
      github: "https://github.com/mohamedalisaifudeen/safecrop/",
      image: "placeholder"
    },
    {
      title: "Ticket Simulation",
      description: "The Ticket Simulation System is a web-based application that replicates a real-time ticketing environment. It allows users to configure ticket parameters, manage tickets dynamically, and track interactions between vendors and customers through an interactive UI. Built with React.js for the frontend and Spring Boot for the backend, the system ensures seamless data flow and real-time updates.",
      technologies: ["React.js", "Spring Boot"],
      github: "https://github.com/inuka2003/Ticket-Simulation-",
      image: "placeholder"
    },
    {
      title: "Student Progression Analysis",
      description: "This Python program analyzes and visualizes student progression based on their earned credits. It classifies students into categories such as Progress, Trailer, Retriever, or Exclude by evaluating their Pass, Defer, and Fail credits. The program also generates a histogram to provide a graphical representation of the outcomes, making data interpretation easier.",
      technologies: ["Python","Histograms"],
      github: "https://github.com/inuka2003/Student-progress-system",
      image: "placeholder"

    },

    {
        title: "Plane Management System",
        description: "The Plane Management System is a Java-based console application that streamlines airline seating management. Users can book and cancel seats, view seating arrangements, search for tickets, and track total sales. Built using object-oriented programming principles, the system also integrates file handling for secure and efficient ticket storage.",
        technologies: ["Java", "OOP", "File Handling"],
        github: "https://github.com/inuka2003/plane-management-system",
        image: "placeholder"
    },

    {
      title: "Hometech",
      description: "HomeTech is a e-commerce web application allows users to easily browse a wide range of products, log in, signup, and manage their shopping cart. With fully functional user authentication, including sign-up, login, and session management, users can securely access and personalize their experience. The application also enables users to view products, add items to the cart, and proceed to a streamlined checkout process.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/inuka2003/hometech",
      image: "placeholder"
  }
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <div className="image-placeholder">
                <span>{project.title}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="btn small-btn primary-btn">GitHub</a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;