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

    </section>
  );
};

export default About;