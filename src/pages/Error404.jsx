import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <div className="glitch-container">
          <h1 className="glitch" data-text="404">404</h1>
        </div>
        <div className="error-message">
          <h2>Page Not Found</h2>
          <p>Oops! Looks like you've ventured into uncharted territory.</p>
          <p>The page you're looking for has been moved, deleted, or never existed.</p>
        </div>
        <Link to="/" className="back-home-btn">
          <span className="btn-content">
            <i className="fas fa-home"></i>
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
