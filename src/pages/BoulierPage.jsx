import React from 'react';
import { Link } from 'react-router-dom';
import Boulier from '../components/Boulier/Boulier';
import './BoulierPage.css';

const BoulierPage = () => {
  return (
    <div className="boulier-page">
      <nav className="boulier-nav">
        <Link to="/" className="back-button">
          <span>←</span> Back to Portfolio
        </Link>
      </nav>
      
      <div className="boulier-content">
        <h1>Interactive Abacus</h1>
        <p className="boulier-description">
          This is an interactive Chinese abacus (Suanpan) implementation. 
          Each column represents a decimal place, with the beads above the bar worth 5 and those below worth 1.
        </p>
        <Boulier />
      </div>
    </div>
  );
};

export default BoulierPage;