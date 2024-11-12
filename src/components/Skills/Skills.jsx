import ProgrammingSkills from './ProgrammingSkills'
import OtherSkills from './OtherSkills'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="technical-skills" data-aos="fade-right">
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-icons">
                <img src="https://img.icons8.com/?size=48&id=13441&format=png" alt="Python" title="Python" />
                <img src="https://img.icons8.com/?size=48&id=13679&format=png" alt="Java" title="Java" />
                <img src="https://img.icons8.com/?size=48&id=shQTXiDQiQVR&format=png" alt="C" title="C" />
                <img src="https://img.icons8.com/?size=48&id=40669&format=png" alt="C++" title="C++" />
                <img src="https://img.icons8.com/?size=48&id=55251&format=png" alt="C#" title="C#" />
                <img src="https://img.icons8.com/?size=64&id=t7vIvDXazOGO&format=png" alt="Rust" title="Rust" />
                <img src="https://img.icons8.com/?size=48&id=ZoxjA0jZDdFZ&format=png" alt="Kotlin" title="Kotlin" />
                <img src="https://img.icons8.com/?size=48&id=1BC75jFEBED6&format=png" alt=".NET MAUI" title=".NET MAUI" />
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-icons">
                <img src="https://img.icons8.com/?size=48&id=20909&format=png" alt="HTML" title="HTML5" />
                <img src="https://img.icons8.com/?size=50&id=1045&format=png" alt="CSS" title="CSS3" />
                <img src="https://img.icons8.com/?size=50&id=3752&format=png" alt="JavaScript" title="JavaScript" />
                <img src="https://img.icons8.com/?size=40&id=bzf0DqjXFHIW&format=png" alt="React" title="React" />
                <img src="https://img.icons8.com/?size=48&id=54087&format=png" alt="NodeJS" title="NodeJS" />
                <img src="https://img.icons8.com/?size=50&id=3753&format=png" alt="PHP" title="PHP" />
              </div>
            </div>

            <div className="skill-category">
              <h3>Database & Tools</h3>
              <div className="skill-icons">
                <img src="/images/SQL.png" alt="SQL" title="SQL" />
                <img src="https://img.icons8.com/?size=50&amp;id=12598&amp;format=png" alt="Git" title="Git" />
              </div>
            </div>
          </div>
        </div>

        <div className="creative-skills" data-aos="fade-left">
          <h2>Creative Tools</h2>
          <div className="creative-grid">
            <div className="tool-card">
              <img src="https://img.icons8.com/?size=80&id=kQgv4iWrBzpN&format=png" alt="Blender" />
              <span>3D Modeling</span>
            </div>
          </div>
        </div>

        <div className="personal-development" data-aos="fade-up">
          <h2>Personal Development</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <i className="activity-icon music"></i>
              <h4>Music & Literature</h4>
              <p>Piano, Drums and Reading</p>
            </div>
            <div className="activity-card">
              <i className="activity-icon sports"></i>
              <h4>Physical Training</h4>
              <p>Swimming, Weight Training, Cycling</p>
            </div>
            <div className="activity-card">
              <i className="activity-icon mind"></i>
              <h4>Strategic Thinking</h4>
              <p>Programming and Chess</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills