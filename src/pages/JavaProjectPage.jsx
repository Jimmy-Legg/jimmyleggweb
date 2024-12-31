import React from 'react';
import { Link } from 'react-router-dom';
import FullscreenImage from '../components/FullscreenImage/FullscreenImage';
import './JavaProjectPage.css';

const JavaProjectPage = () => {
  return (
    <div className="java-project-container">
      <nav className="project-nav">
        <Link to="/" className="back-button">← Back to Home</Link>
      </nav>

      <header className="project-header">
        <h1>Java Project: SAE 2.01-2.02</h1>
        <p className="project-subtitle">A Comprehensive Java Application Development Project</p>
      </header>

      <main className="project-content">
        <section className="project-overview">
          <div className="project-description">
            <h2>Project Overview</h2>
            <p>
              The Orchard Game is a Java-based strategy game developed as part of the SAE-S2.01-02 module.
              Players manage an orchard, planting and harvesting trees while dealing with various challenges
              and weather conditions.
            </p>
            <div className="project-links">
              <a href="https://github.com/Leteno/JeuVerger" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
            <div className="credits-section">
              <h3>Project Credits</h3>
              <div className="credits-container">
                <div className="credit-item">
                  <span className="credit-name">Nathan Pinheiro</span>
                  <span className="credit-role">Developer</span>
                </div>
                <div className="credit-item">
                  <span className="credit-name">Jimmy Legg</span>
                  <span className="credit-role">Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-media">
            <FullscreenImage 
              src="/images/Orchard.gif"
              alt="Orchard Game Demo"
            />
          </div>
        </section>

        <section className="project-details">
          <div className="detail-card">
            <h3>Technical Stack</h3>
            <ul>
              <li>Java Development Kit (JDK)</li>
              <li>Object-Oriented Programming</li>
              <li>Data Structures & Algorithms</li>
              <li>Unit Testing</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Key Features</h3>
            <ul>
              <li>Modular Architecture</li>
              <li>Efficient Data Processing</li>
              <li>User-Friendly Interface</li>
              <li>Comprehensive Documentation</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Learning Outcomes</h3>
            <ul>
              <li>Advanced Java Programming</li>
              <li>Software Design Patterns</li>
              <li>Project Management</li>
              <li>Technical Documentation</li>
            </ul>
          </div>
        </section>

        <section className="project-documentation">
          <h2>Project Documentation (FR)</h2>
          <p>
            For a detailed understanding of the project, including its architecture, implementation details,
            and technical specifications, please refer to our comprehensive project report.
          </p>
          <div className="pdf-preview">
            <embed 
              src="/pdf/Rapport SAE 2.01-2.02.pdf" 
              type="application/pdf" 
              width="100%" 
              height="600px" 
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default JavaProjectPage;
