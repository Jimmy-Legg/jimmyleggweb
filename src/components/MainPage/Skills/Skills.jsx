import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skillLevels = {
    python: 99,
    java: 80,
    c: 80,
    cpp: 50,
    csharp: 85,
    rust: 50,
    kotlin: 75,
    maui: 80,
    html: 100,
    css: 90,
    javascript: 85,
    react: 85,
    nodejs: 80,
    php: 80,
    sql: 85,
    git: 90,
  };

  const SkillIcon = ({ name, src, level }) => (
    <div 
      className="skill-icon-wrapper"
      onMouseEnter={() => setHoveredSkill(name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <img src={src} alt={name} title={name} />
      <span>{name.toUpperCase()}</span>
      <div className="skill-level">
        <div 
          className="skill-level-fill" 
          style={{ 
            width: hoveredSkill === name ? `${level}%` : '0%'
          }}
        />
      </div>
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
                <SkillIcon name="Python" src="https://img.icons8.com/?size=48&id=13441&format=png" level={skillLevels.python} />
                <SkillIcon name="Java" src="https://img.icons8.com/?size=48&id=13679&format=png" level={skillLevels.java} />
                <SkillIcon name="C" src="https://img.icons8.com/?size=48&id=shQTXiDQiQVR&format=png" level={skillLevels.c} />
                <SkillIcon name="C++" src="https://img.icons8.com/?size=48&id=40669&format=png" level={skillLevels.cpp} />
                <SkillIcon name="C#" src="https://img.icons8.com/?size=48&id=55251&format=png" level={skillLevels.csharp} />
                <SkillIcon name="Rust" src="https://img.icons8.com/?size=64&id=t7vIvDXazOGO&format=png" level={skillLevels.rust} />
                <SkillIcon name="Kotlin" src="https://img.icons8.com/?size=48&id=ZoxjA0jZDdFZ&format=png" level={skillLevels.kotlin} />
                <SkillIcon name=".NET MAUI" src="https://img.icons8.com/?size=48&id=1BC75jFEBED6&format=png" level={skillLevels.maui} />
              </div>
            </div>
            
            <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
              <h3>Web Development</h3>
              <div className="skill-icons">
                <SkillIcon name="HTML5" src="https://img.icons8.com/?size=48&id=20909&format=png" level={skillLevels.html} />
                <SkillIcon name="CSS3" src="https://img.icons8.com/?size=50&id=1045&format=png" level={skillLevels.css} />
                <SkillIcon name="JavaScript" src="https://img.icons8.com/?size=50&id=3752&format=png" level={skillLevels.javascript} />
                <SkillIcon name="React" src="https://img.icons8.com/?size=40&id=bzf0DqjXFHIW&format=png" level={skillLevels.react} />
                <SkillIcon name="Node.js" src="https://img.icons8.com/?size=48&id=54087&format=png" level={skillLevels.nodejs} />
                <SkillIcon name="PHP" src="https://img.icons8.com/?size=50&id=3753&format=png" level={skillLevels.php} />
              </div>
            </div>

            <div className="skill-category" data-aos="fade-up" data-aos-delay="600">
              <h3>Database & Tools</h3>
              <div className="skill-icons">
                <SkillIcon name="SQL" src="/images/SQL.png" level={skillLevels.sql} />
                <SkillIcon name="Git" src="https://img.icons8.com/?size=50&id=12598&format=png" level={skillLevels.git} />
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
              <div className="carousel-content">
                <img 
                  src={carouselImages[currentSlide].src} 
                  alt={carouselImages[currentSlide].alt}
                  className="carousel-image"
                />
              </div>
              <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
              <div className="carousel-dots">
                {carouselImages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
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