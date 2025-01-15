import React from 'react';
import { Link } from 'react-router-dom';
import FullscreenImage from '../components/FullscreenImage/FullscreenImage';
import ContactSection from '../components/MainPage/ContactSection/ContactSection';
import '../styles/ProjectPage.css';

const LaPosteProjectPage = () => {
  return (
    <div className="project-container">
      <nav className="project-nav">
        <Link to="/" className="back-button">← Back to Home</Link>
      </nav>

      <header className="project-header">
        <h1>La Poste Project</h1>
        <p className="project-subtitle">Optimizing Delivery Routes for La Poste</p>
      </header>

      <main className="project-content">
        <section className="project-overview">
          <div className="project-description">
            <h2>Project Overview</h2>
            <p>
              This project focuses on optimizing delivery routes for La Poste, France's postal service company.
              The project aims to improve efficiency in package delivery by implementing advanced routing algorithms
              and data analysis techniques.
            </p>
            <div className="project-links">
              <a href="https://github.com/leocdt/RAGAdmin" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
              <a href="/pdf/SAE-S5 La Poste.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
                View Full Report (PDF)
              </a>
            </div>
            <div className="credits-section">
              <h3>Project Team</h3>
              <div className="credits-container">
                <div className="credit-item">
                  <a href="https://github.com/leocdt" target="_blank" rel="noopener noreferrer" className="credit-link">
                    <span className="credit-name">Léo Condat</span>
                    <span className="credit-role">Developer</span>
                  </a>
                </div>
                <div className="credit-item">
                  <a href="https://github.com/nosakail" target="_blank" rel="noopener noreferrer" className="credit-link">
                    <span className="credit-name">Yassine Saddiki</span>
                    <span className="credit-role">Developer</span>
                  </a>
                </div>
                <div className="credit-item">
                  <a href="https://github.com/Mohamed-hub16" target="_blank" rel="noopener noreferrer" className="credit-link">
                    <span className="credit-name">Mohamed Messri</span>
                    <span className="credit-role">Developer</span>
                  </a>
                </div>
                <div className="credit-item">
                  <a href="https://github.com/Sen0xC" target="_blank" rel="noopener noreferrer" className="credit-link">
                    <span className="credit-name">Cyril Romero</span>
                    <span className="credit-role">Developer</span>
                  </a>
                </div>
                <div className="credit-item">
                  <a href="https://github.com/Jimmy-legg" target="_blank" rel="noopener noreferrer" className="credit-link">
                    <span className="credit-name">Jimmy Legg</span>
                    <span className="credit-role">Developer</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="languages-section">
              <h3>Technologies Used</h3>
              <div className="languages-container">
                <div className="language-item">
                  <span className="language-name">Python</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '25%', backgroundColor: '#3572A5' }}></div>
                  </div>
                  <span className="language-percentage">25%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">React</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '20%', backgroundColor: '#61DAFB' }}></div>
                  </div>
                  <span className="language-percentage">20%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Django</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '15%', backgroundColor: '#092E20' }}></div>
                  </div>
                  <span className="language-percentage">15%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Node.js</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '10%', backgroundColor: '#339933' }}></div>
                  </div>
                  <span className="language-percentage">10%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Tailwind & SASS</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '10%', backgroundColor: '#38B2AC' }}></div>
                  </div>
                  <span className="language-percentage">10%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">SQLite & ChromaDB</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '10%', backgroundColor: '#003B57' }}></div>
                  </div>
                  <span className="language-percentage">10%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Ollama (LLama 3.1:8b)</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '5%', backgroundColor: '#FF6B6B' }}></div>
                  </div>
                  <span className="language-percentage">5%</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Gitea & Jenkins</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '5%', backgroundColor: '#609926' }}></div>
                  </div>
                  <span className="language-percentage">5%</span>
                </div>
              </div>
            </div>
            <div className="project-media">
              <FullscreenImage
                src="/images/RAGAdmin.png"
                alt="La Poste Project Overview"
              />
            </div>
          </div>
        </section>

        <section className="project-details">
          <div className="detail-card">
            <h3>Key Features</h3>
            <ul>
              <li>Route Optimization Algorithm</li>
              <li>Data Analysis Tools</li>
              <li>Performance Metrics</li>
              <li>Interactive Visualization</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Technical Aspects</h3>
            <ul>
              <li>Algorithm Implementation</li>
              <li>Database Management</li>
              <li>Data Processing</li>
              <li>Performance Analysis</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Project Outcomes</h3>
            <ul>
              <li>Improved Delivery Efficiency</li>
              <li>Cost Reduction</li>
              <li>Optimized Routes</li>
              <li>Enhanced Performance Tracking</li>
            </ul>
          </div>
        </section>
        <section className="project-documentation">
          <h2>Project Documentation</h2>
          <p>
            For detailed information about the project's implementation, game rules, and technical specifications,
            please refer to our comprehensive project report.
          </p>
          <div className="pdf-preview">
            <embed
              src="/pdf/SAE-S5 La Poste.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default LaPosteProjectPage;
