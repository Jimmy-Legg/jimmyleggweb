import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: '/images/temple.png', alt: 'Temple 3D Model' },
    { src: '/images/3D.gif', alt: '3D Animation' },
    { src: '/images/rond3D.gif', alt: '3D Round Animation' },
    { src: '/images/well.jpg', alt: 'Well 3D Model' },
    { src: '/images/candle.jpg', alt: 'Candle 3D Model' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const SkillIcon = ({ name, src }) => (
    <div className="skill-icon-wrapper">
      <img src={src} alt={name} title={name} />
      <span>{name.toUpperCase()}</span>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="technical-skills" data-aos="fade-up">
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
              <h3>Languages</h3>
              <div className="skill-icons">
                <SkillIcon name="Python" src="https://img.icons8.com/?size=48&id=13441&format=png" />
                <SkillIcon name="Java" src="https://img.icons8.com/?size=48&id=13679&format=png" />
                <SkillIcon name="C" src="https://img.icons8.com/?size=48&id=shQTXiDQiQVR&format=png" />
                <SkillIcon name="C++" src="https://img.icons8.com/?size=48&id=40669&format=png" />
                <SkillIcon name="C#" src="https://img.icons8.com/?size=48&id=55251&format=png" />
                <SkillIcon name="Rust" src="https://img.icons8.com/?size=64&id=t7vIvDXazOGO&format=png" />
                <SkillIcon name="Kotlin" src="https://img.icons8.com/?size=48&id=ZoxjA0jZDdFZ&format=png" />
                <SkillIcon name=".NET MAUI" src="https://img.icons8.com/?size=48&id=1BC75jFEBED6&format=png" />
                <SkillIcon name="Networking" src="https://img.icons8.com/?size=48&id=71524&format=png" />
              </div>
            </div>
            
            <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
              <h3>Web Development</h3>
              <div className="skill-icons">
                <SkillIcon name="HTML" src="https://img.icons8.com/?size=48&id=20909&format=png" />
                <SkillIcon name="CSS" src="https://img.icons8.com/?size=50&id=1045&format=png" />
                <SkillIcon name="PHP" src="https://img.icons8.com/?size=50&id=3753&format=png" />
                <SkillIcon name="Tailwind CSS" src="https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png" />
                <SkillIcon name="JavaScript" src="https://img.icons8.com/?size=50&id=108784&format=png" />
                <SkillIcon name="React" src="https://img.icons8.com/?size=48&id=123603&format=png" />
                <SkillIcon name="Node.js" src="https://img.icons8.com/?size=50&id=54087&format=png" />
              </div>
            </div>

            <div className="skill-category" data-aos="fade-up" data-aos-delay="600">
              <h3>Database</h3>
              <div className="skill-icons">
                <SkillIcon name="MySQL" src="https://img.icons8.com/?size=48&id=UFXRpPFebwa2&format=png" />
                <SkillIcon name="PostgreSQL" src="https://img.icons8.com/?size=80&id=LwQEs9KnDgIo&format=png" />
                <SkillIcon name="MongoDB" src="https://img.icons8.com/?size=80&id=cREyrHivHRHF&format=png" />
              </div>
            </div>
            <div className="skill-category" data-aos="fade-up" data-aos-delay="800">
              <h3>Tools</h3>
              <div className="skill-icons">
                <SkillIcon name="Visual Studio Code" src="https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png" />
                <SkillIcon name="Eclipse" src="https://img.icons8.com/?size=80&id=rPAHs7H1vriV&format=png" />
                <SkillIcon name="Android Studio" src="https://img.icons8.com/?size=48&id=04OFrkjznvcd&format=png" />
                <SkillIcon name="IntelliJ IDEA" src="https://img.icons8.com/?size=48&id=61466&format=png" />
                <SkillIcon name="Git" src="https://img.icons8.com/?size=48&id=20906&format=png" />
                <SkillIcon name="GitLab" src="https://img.icons8.com/?size=48&id=34886&format=png" />
                <SkillIcon name="Shell" src="https://img.icons8.com/?size=48&id=19292&format=png" />
                <SkillIcon name="Unity" src="https://img.icons8.com/?size=48&id=P08kExl7rixR&format=png" />
                <SkillIcon name="Blender" src="https://img.icons8.com/?size=48&id=kQgv4iWrBzpN&format=png" />
                <SkillIcon name="Docker" src="https://img.icons8.com/?size=48&id=22813&format=png" />
              </div>
            </div>
          </div>
        </div>

        <div className="creative-skills" data-aos="fade-up">
          <h2>Creative Tools</h2>
          <div className="creative-content">
            <div className="tool-card" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="https://img.icons8.com/?size=80&id=kQgv4iWrBzpN&format=png" 
                alt="Blender" 
              />
              <span>Blender 3D Modeling</span>
            </div>
            
            <div className="carousel-container" data-aos="fade-up" data-aos-delay="400">
              <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
              <div className="carousel-content" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {carouselImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="carousel-item"
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
              <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
            </div>
          </div>
        </div>

        <div className="personal-development" data-aos="fade-up">
          <h2>Personal Development & Achievements</h2>
          <div className="activities-grid">
            <div className="activity-card" data-aos="fade-up" data-aos-delay="200">
              <i className="activity-icon sports"></i>
              <h4>Sports Excellence</h4>
              <ul>
                <li><span className="highlight">Judo:</span> 7 years of competitive experience</li>
                <li><span className="highlight">Swimming:</span> 3 years of club competition</li>
                <li><span className="highlight">Rock Climbing:</span> Active practitioner</li>
              </ul>
            </div>

            <div className="activity-card" data-aos="fade-up" data-aos-delay="400">
              <i className="activity-icon creative"></i>
              <h4>Creative & Technical</h4>
              <ul>
                <li><span className="highlight">3D Modeling:</span> Game development team experience</li>
                <li><span className="highlight">Computer Assembly:</span> Hardware & software expertise</li>
                <li><span className="highlight">Programming:</span> Passion for coding</li>
              </ul>
            </div>

            <div className="activity-card" data-aos="fade-up" data-aos-delay="600">
              <i className="activity-icon mind"></i>
              <h4>Arts & Strategy</h4>
              <ul>
                <li><span className="highlight">Music:</span> 5 years drums, concert performances</li>
                <li><span className="highlight">Bridge:</span> 3 years, National competition in Paris</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;