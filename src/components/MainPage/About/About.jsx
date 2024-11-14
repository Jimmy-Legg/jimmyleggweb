import './About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="profile-container" data-aos="zoom-in">
        <div className="profile-content">
          <div className="profile-header">
            <div className="profile-image-container" data-aos="fade-right">
              <img 
                src="images/profilepic.jpg" 
                alt="Jimmy Legg" 
                className="profile-image"
              />
              <div className="profile-image-border"></div>
            </div>
            <div className="profile-text">
              <h1 data-aos="fade-right">Jimmy Legg</h1>
              <h2 className="subtitle" data-aos="fade-right">
                Computer Science Student & Developer
              </h2>
            </div>
          </div>
          <p className="bio" data-aos="fade-right">
            A passionate third-year Computer Science student at the University of Limoges, 
            combining technical expertise with business acumen through studies in Management, 
            Economics, and Mathematics. Dedicated to creating innovative solutions and 
            continuously expanding my programming knowledge across multiple languages and platforms.
          </p>
        </div>
      </div>

      <div className="experience-grid">
        <div className="experience-card" data-aos="flip-right">
          <div className="card-header">
            <img data-aos="zoom-in" src="/images/company-icon.svg" alt="ABI" />
            <div className="header-content">
              <h3>Technical Support Intern</h3>
              <h4>ABI (Atelier Berry Informatique)</h4>
            </div>
          </div>
          <div className="card-body">
            <div className="responsibilities">
              <h5>Key Responsibilities</h5>
              <ul>
                <li>System deployment and configuration</li>
                <li>Hardware assembly and troubleshooting</li>
                <li>Client-facing technical support</li>
              </ul>
            </div>
            <div className="skills-gained">
              <h5>Skills Developed</h5>
              <ul>
                <li>Hardware diagnostics</li>
                <li>System administration</li>
                <li>Customer service</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-card" data-aos="flip-right">
          <div className="card-header">
            <img data-aos="zoom-in" src="/images/agriculture-icon.svg" alt="Agriculture" />
            <div className="header-content">
              <h3>Agricultural Specialist</h3>
              <h4>Seasonal Position - Corn Cultivation</h4>
            </div>
          </div>
          <div className="card-body">
            <div className="responsibilities">
              <h5>Key Responsibilities</h5>
              <ul>
                <li>Precision corn detasseling</li>
                <li>Quality control implementation</li>
                <li>Harvest preparation</li>
              </ul>
            </div>
            <div className="skills-gained">
              <h5>Skills Developed</h5>
              <ul>
                <li>Attention to detail</li>
                <li>Process adherence</li>
                <li>Team coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;