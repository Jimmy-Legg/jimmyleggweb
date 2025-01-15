import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import usePrefetch from '../../../hooks/usePrefetch';
import './ProjectCard.css';

const ProjectCard = ({ title, subtitle, description, link, github, className, buttonText = "Learn More", importFn }) => {
  const prefetchComponent = usePrefetch();
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (importFn) {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => prefetchComponent(importFn));
      } else {
        setTimeout(() => prefetchComponent(importFn), 0);
      }
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`card ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      <span></span>
      <div className="content">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <p>{description}</p>
        <div className="button-container">
          {link ? (
            <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
              {buttonText}
            </a>
          ) : (
            <button disabled>{buttonText}</button>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          )}
          {!link && !github && <span className="disabled-link">{buttonText}</span>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard