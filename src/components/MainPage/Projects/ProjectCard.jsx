import './ProjectCard.css'

const ProjectCard = ({ title, subtitle, description, link, github, className, buttonText = "Learn More" }) => {
  return (
    <div className={`card ${className}`}>
      <span></span>
      <div className="content">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <p>{description}</p>
        <div className="button-container">
          {link && (
            <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
              {buttonText}
            </a>
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