import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="form-input form-textarea"
            />
          </div>

          <button 
            type="submit" 
            className={`submit-button ${status ? 'button-' + status : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 
             status === 'success' ? 'Message Sent!' : 
             status === 'error' ? 'Failed to Send' : 
             'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
