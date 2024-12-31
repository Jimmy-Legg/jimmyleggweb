import React from 'react';
import Contact from '../../Contact/Contact';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section-wrapper" id="contact">
      <div className="contact-info">
        <h2>Let's Connect</h2>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+33781750966">+33 6 56 68 37 38</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:jimmy.legg18@gmail.com">jimmy.legg18@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/jimmy-legg-521623271/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/Jimmy-legg" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default ContactSection;
