import React, { useState } from 'react';
import './FullscreenImage.css';

const FullscreenImage = ({ src, alt }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="project-gif"
        onClick={toggleFullscreen}
        style={{ cursor: 'pointer' }}
      />
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={toggleFullscreen}>
          <div className="fullscreen-content">
            <img src={src} alt={alt} className="fullscreen-image" />
            <button className="close-button" onClick={toggleFullscreen}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FullscreenImage;
