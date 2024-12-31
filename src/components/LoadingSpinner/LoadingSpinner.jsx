import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container" role="alert" aria-busy="true">
      <div className="loading-spinner"></div>
      <span className="visually-hidden">Loading content...</span>
    </div>
  );
};

export default LoadingSpinner;
