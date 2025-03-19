import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Inuka Wickramasinghe</div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://github.com/inuka2003" className="social-icon github-icon"></a>
          <a href="https://www.linkedin.com/in/inuka-wickramasinghe-3968a1293/" className="social-icon linkedin-icon"></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Inuka Wickramasinghe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;