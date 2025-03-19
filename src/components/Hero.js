import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Inuka Wickramasinghe</span></h1>
        <h2>Software Engineering Undergraduate</h2>
        <p>Passionate about Innovtions</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;