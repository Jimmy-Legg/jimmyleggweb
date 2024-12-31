import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  useEffect(() => {
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
    <section className="contact-section" id="contact" aria-label="Contact form">
      <div className="contact-container">
        <h2 id="contact-heading">Get In Touch</h2>
        <p className="contact-description" id="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="contact-form"
          aria-labelledby="contact-heading"
          aria-describedby="contact-description"
          noValidate
        >
          <div className="form-group">
            <label htmlFor="user_name" className="visually-hidden">Your Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              minLength="2"
              maxLength="50"
              className="form-input"
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="user_email" className="visually-hidden">Your Email</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="form-input"
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              minLength="10"
              maxLength="1000"
              className="form-input form-textarea"
              aria-required="true"
            />
          </div>

          <button 
            type="submit" 
            className={`submit-button ${status ? 'button-' + status : ''}`}
            disabled={status === 'sending'}
            aria-live="polite"
          >
            <span className="button-text">
              {status === 'sending' ? 'Sending...' : 
               status === 'success' ? 'Message Sent!' : 
               status === 'error' ? 'Failed to Send' : 
               'Send Message'}
            </span>
          </button>
          
          {status && (
            <div 
              className={`form-status ${status}`} 
              role="alert" 
              aria-live="polite"
            >
              {status === 'success' ? 'Your message has been sent successfully!' :
               status === 'error' ? 'There was an error sending your message. Please try again.' :
               status === 'sending' ? 'Sending your message...' : ''}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
