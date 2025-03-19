import React from 'react';
import '../App.css';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 70 },
    { name: "Java", level: 75 },
    { name: "Python", level: 80 },
    { name: "Git", level: 75 }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking"
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h2>My Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-content">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skill-bars">
            {technicalSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div className="soft-skill-item" key={index}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;