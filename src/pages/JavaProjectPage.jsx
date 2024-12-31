import React from 'react';
import { Link } from 'react-router-dom';
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
          <h2>Project Overview</h2>
          <p>
            This project was developed as part of the SAE 2.01-2.02 module, focusing on creating
            a robust Java application that demonstrates various programming concepts and best practices.
          </p>
          <div className="project-links">
            <a href="https://github.com/Leteno18/SAE-S1.02" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
            <a href="/pdf/Rapport SAE 2.01-2.02.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              View Full Report (PDF)
            </a>
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
