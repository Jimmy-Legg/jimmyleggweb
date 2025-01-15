import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    
    // Name validation
    const name = formData.get('user_name');
    if (!name || name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const email = formData.get('user_email');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    const message = formData.get('message');
    if (!message || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

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
        setErrors({});
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
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
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="user_email" className="visually-hidden">Your Email</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="error-message" role="alert">{errors.email}</span>}
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
              className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <span className="error-message" role="alert">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className={`submit-button ${status ? 'button-' + status : ''}`}
            disabled={isSubmitting || status === 'sending'}
            aria-live="polite"
          >
            <span className="button-text">
              {status === 'sending' ? 'Sending...' : 
               status === 'success' ? 'Message Sent!' : 
               status === 'error' ? 'Error! Try Again' : 
               'Send Message'}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
