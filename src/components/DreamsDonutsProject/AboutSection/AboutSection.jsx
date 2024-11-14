import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <h2>About the Project</h2>
        <p>Dreams Donuts Command is a web-based application designed to bridge the communication gap between the shop and production areas in a multi-level donut establishment. It provides a centralized platform for managing donut production, updating weekly selections, and streamlining operations.</p>
        
        <h3>Shop and Production Layout</h3>
        <p><strong>Problem Statement:</strong> The shop and production areas are on separate levels:</p>
        <ul>
          <li><strong>Level 0:</strong> The shop where customers can access from the street.</li>
          <li><strong>Level 1:</strong> The production area where donuts are made.</li>
        </ul>
        
        <p>Currently, there is no practical communication between the shop and the production area except via a staircase and a phone. This setup can lead to inefficiencies and delays in communication.</p>
        
        <p><strong>Proposed Solution:</strong> The Dreams Donuts Command Application aims to bridge this communication gap by providing a centralized digital platform. This application allows the shop and production teams to communicate more effectively and manage production needs without relying solely on physical or verbal methods.</p>
      </div>
    </section>
  );
};

export default AboutSection;
