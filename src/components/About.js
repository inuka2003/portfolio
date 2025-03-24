import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="image-placeholder">
            <span></span>
          </div>
        </div>
        <div className="about-text">
          <h3>Who am I?</h3>
          <p>I am a software engineering undergraduate with a passionate of building full-stack applications.</p>
          <p>Currently, I'm focusing on full-stack development, with particular interest in Java, Python, Springboot, React, PHP and MySql. I enjoy solving complex problems and turning ideas into reality through code.</p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Inuka Nimsara Wickramasinghe</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">inukawickramasinghe2003@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Education:</span>
              <span className="detail-value">
                      Informatics Institute of Technology affiliated with University of Westminster (2023-2027)
                <br />
                Richmond College (2009-2022)
                
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Galle, Sri Lanka</span>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1eg8OPWroPEA1AyH2mMBQOMN-yqRkDKOt/view?usp=drive_link" className="btn primary-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;