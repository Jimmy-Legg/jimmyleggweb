import React from 'react';
import { Link } from 'react-router-dom';
import FullscreenImage from '../components/FullscreenImage/FullscreenImage';
import ContactSection from '../components/MainPage/ContactSection/ContactSection';
import './PythonGamePage.css';

const PythonGamePage = () => {
  return (
    <div className="python-game-container">
      <nav className="project-nav">
        <Link to="/" className="back-button">← Back to Home</Link>
      </nav>

      <header className="project-header">
        <h1>Python Mini Games Project</h1>
        <p className="project-subtitle">A Collection of Interactive Console Games</p>
      </header>

      <main className="project-content">
        <section className="project-overview">
          <div className="project-description">
            <h2>Project Overview</h2>
            <p>
              This Python-based project features a collection of interactive console games developed as part of
              the SAE-S1.01 module. The project showcases various programming concepts and game development
              techniques using Python's console interface.
            </p>
            <div className="project-links">
              <a href="https://github.com/Leteno18/SAE-S1.02" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
              <a href="/pdf/SAE-S101-Nathan-Jimmy-G1B.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
                View Full Report (PDF)
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
            <div className="languages-section">
              <h3>Languages Used</h3>
              <div className="languages-container">
                <div className="language-item">
                  <span className="language-name">Python</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{ width: '100%', backgroundColor: '#3572A5' }}></div>
                  </div>
                  <span className="language-percentage">100%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-media">
            <FullscreenImage 
              src="/images/JeuxPy.gif"
              alt="Python Mini Games Demo"
            />
          </div>
        </section>

        <section className="project-details">
          <div className="detail-card">
            <h3>Available Games</h3>
            <ul>
              <li>4x4 Strategy Game</li>
              <li>Tic Tac Toe</li>
              <li>Match Game</li>
              <li>Number Guessing Game</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Game Features</h3>
            <ul>
              <li>Player vs Player Mode</li>
              <li>Player vs AI Mode</li>
              <li>Bot vs Bot Mode</li>
              <li>Interactive Rules Section</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Technical Highlights</h3>
            <ul>
              <li>Console-based UI</li>
              <li>Bot Implementation</li>
              <li>Game State Management</li>
              <li>Score Tracking System</li>
            </ul>
          </div>
        </section>

        <section className="game-modes">
          <h2>Game Modes & Features</h2>
          <div className="modes-grid">
            <div className="mode-card">
              <h3>Player vs Player</h3>
              <p>Challenge your friends in local multiplayer matches across all available games.</p>
            </div>
            <div className="mode-card">
              <h3>Player vs AI</h3>
              <p>Test your skills against computer-controlled opponents with varying difficulty levels.</p>
            </div>
            <div className="mode-card">
              <h3>AI vs AI</h3>
              <p>Watch and analyze matches between computer-controlled players.</p>
            </div>
            <div className="mode-card">
              <h3>Rules & Tutorial</h3>
              <p>Learn how to play each game with comprehensive rules and gameplay instructions.</p>
            </div>
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
              src="/pdf/SAE-S101-Nathan-Jimmy-G1B.pdf" 
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

export default PythonGamePage;
