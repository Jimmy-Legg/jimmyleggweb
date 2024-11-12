import './ProjectCard.css'

const ProjectCard = ({ title, subtitle, description, link, className }) => {
  return (
    <div className={`card ${className}`} data-aos="fade-right">
      <span></span>
      <div className="content">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <p>{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.includes('github') ? 'GitHub repository' : 'Download CV'}
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard