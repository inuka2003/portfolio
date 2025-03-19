import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out to me!</p>
          <div className="info-item">
            <i className="info-icon location-icon"></i>
            <span>Galle, Sri Lanka</span>
          </div>
          <div className="info-item">
            <i className="info-icon email-icon"></i>
            <span>inukawickramasinghe2003@gmail.com</span>
          </div>
          <div className="info-item">
            <i className="info-icon phone-icon"></i>
            <span>+94 76 544 93 42</span>
          </div>
          <div className="social-links">
            <a href="https://github.com/inuka2003" className="social-icon github-icon"></a>
            <a href="https://www.linkedin.com/in/inuka-wickramasinghe-3968a1293/" className="social-icon linkedin-icon"></a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;