import React from 'react';
import '../App.css';
import clearcast from '../images/weather.jpg';
import todo from '../images/todo.webp';
import ecommerce from '../images/ecommerce.webp';
import flight from '../images/flight.webp';
import analys from '../images/analys.jpg';
import ticket from '../images/ticket.webp';
import crop from '../images/crop.png';

const Projects = () => {
  const projects = [
    {
      title: "SafeCrop",
      description: "SafeCrop is an IoT-based full-stack project designed to protect crops from elephant intrusions. This group project integrates IoT devices to detect elephant movements and trigger preventive measures, ensuring the safety of farmlands. The system includes real-time monitoring, automated alerts, and a user-friendly interface for farmers to track activity and take necessary action.",
      technologies: ["Flutter", "Flask", "Html/Css/Boostrap", "Firebase"],
      github: "https://github.com/mohamedalisaifudeen/safecrop/",
      image: crop
    },
    {
      title: "Ticket Simulation",
      description: "The Ticket Simulation System is a web-based application that replicates a real-time ticketing environment. It allows users to configure ticket parameters, manage tickets dynamically, and track interactions between vendors and customers through an interactive UI. Built with React.js for the frontend and Spring Boot for the backend, the system ensures seamless data flow and real-time updates.",
      technologies: ["React.js", "Spring Boot"],
      github: "https://github.com/inuka2003/Ticket-Simulation-",
      image: ticket
    },
    {
      title: "Student Progression Analysis",
      description: "This Python program analyzes and visualizes student progression based on their earned credits. It classifies students into categories such as Progress, Trailer, Retriever, or Exclude by evaluating their Pass, Defer, and Fail credits. The program also generates a histogram to provide a graphical representation of the outcomes, making data interpretation easier.",
      technologies: ["Python","Histograms"],
      github: "https://github.com/inuka2003/Student-progress-system",
      image: analys

    },

    {
        title: "Plane Management System",
        description: "The Plane Management System is a Java-based console application that streamlines airline seating management. Users can book and cancel seats, view seating arrangements, search for tickets, and track total sales. Built using object-oriented programming principles, the system also integrates file handling for secure and efficient ticket storage.",
        technologies: ["Java", "OOP", "File Handling"],
        github: "https://github.com/inuka2003/plane-management-system",
        image: flight
    },

    {
      title: "Ecommerce Web application",
      description: "This is a e-commerce web application allows users to easily browse a wide range of products, log in, signup, and manage their shopping cart. With fully functional user authentication, including sign-up, login, and session management, users can securely access and personalize their experience. The application also enables users to view products, add items to the cart, and proceed to a streamlined checkout process.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/inuka2003/hometech",
      image: ecommerce
  },
    
   {
    title: "Fullstack To-Do App",
    description: "This is a fullstack To-Do application built using React for the frontend and Node.js, Express, and MongoDB for the backend. It allows users to manage tasks with features like adding, deleting, and marking tasks as complete. The backend is secured using environment variables and a structured REST API.",
    technologies: ["React", "CSS", "Node.js", "Express.js", "MongoDB", "dotenv"],
    github: "https://github.com/inuka2003/todo-app",
    image: todo
  },

   {
  title: "ClearCast",
  description: "ClearCast is a full-stack weather forecast application built with React and Spring Boot. It allows users to retrieve real-time weather data for any city. The frontend is built with React and styled using CSS, while the backend is powered by Spring Boot to handle API requests and serve data. The app provides current temperature, conditions, and other useful metrics through a clean UI.",
  technologies: ["React", "Spring Boot", "Java", "CSS", "REST API"],
  github: "https://github.com/inuka2003/ClearCast",
  image: clearcast
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
  {project.image !== "placeholder" ? (
    <img src={project.image} alt={project.title} className="project-thumbnail" />
  ) : (
    <div className="image-placeholder">
      <span>{project.title}</span>
    </div>
  )}
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