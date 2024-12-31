import React, { useState } from 'react';
import './ProjectSection.css';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const ProjectSection = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (title) => {
    setLoadedImages(prev => ({ ...prev, [title]: true }));
  };

  const projects = [
    {
      title: "Home",
      description: "The home page provides a central navigation hub for accessing different functionalities of the application.",
      image: "https://i.ibb.co/vHtTvkX/Home.png",
      maxWidth: 300
    },
    {
      title: "Produce",
      description: "The produce page allows users to input commands related to donut production.",
      image: "https://i.ibb.co/W3s61bP/produce.png",
      maxWidth: 800
    },
    {
      title: "Donuts Manquants Popup",
      description: "When clicking on the image of a donut it shows a popup where users can send donuts that are missing or need to be restocked in shop window. It provides a summary of the current production needs. There are numbers from 1 to 9, 1plaque that is 15 donuts and vide which is an empty button that is used when there is no more of a specific donut.",
      image: "https://i.ibb.co/8MGdPV0/Donuts-Manquants.png",
      maxWidth: 300
    },
    {
      title: "Donut Card",
      description: "When a number is clicked the number of donuts currently in production is shown on the donut and the background changes to green.",
      image: "https://i.ibb.co/YtQcV12/production.png",
      maxWidth: 100
    },
    {
      title: "Week Selection",
      description: "Here, you can select which donuts will be featured for the week. This page allows you to manage weekly selections.",
      image: "https://i.ibb.co/0QhwQBc/weekselection.png",
      maxWidth: 800
    },
    {
      title: "Week Selection Validation",
      description: "This page allows you to validate your weekly donut selections. You can review and confirm the donuts that will be featured.",
      image: "https://i.ibb.co/bQpFQzz/weekselection-png-validate.png",
      maxWidth: 800
    },
    {
      title: "Lab",
      description: "The LAB page provides an interface where commands from the produce page can be seen.",
      image: "https://i.ibb.co/Dg9WGXJ/caisse.png",
      maxWidth: 800
    },
    {
      title: "Sounds",
      description: "On the LAB page there are ding sounds and voice announcing new donuts sent, the voice and ding sound can be muted.",
      image: "https://i.ibb.co/QHJX8YY/sounds.png",
      maxWidth: 300
    }
  ];

  return (
    <section id="features">
      <div className="container">
        {projects.map((project, index) => (
          <div key={index} className="project" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="image-container">
              {!loadedImages[project.title] && (
                <div className="loading-container">
                  <LoadingSpinner />
                </div>
              )}
              <img
                src={project.image}
                alt={project.title}
                style={{ 
                  maxWidth: project.maxWidth,
                  display: loadedImages[project.title] ? 'block' : 'none'
                }}
                onLoad={() => handleImageLoad(project.title)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
