import './ProjectCard.css'

const ProjectCard = ({ title, subtitle, description, link, className, buttonText = "Learn More" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="content">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <p>{description}</p>
        {link && (
          <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
            {buttonText}
          </a>
        )}
        {!link && <span className="disabled-link">{buttonText}</span>}
      </div>
    </div>
  )
}

export default ProjectCard