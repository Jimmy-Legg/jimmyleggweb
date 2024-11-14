import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>Interested in implementing Dreams Donuts Command for your business? Let's connect!</p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
