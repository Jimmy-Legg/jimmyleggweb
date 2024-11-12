import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'resources', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-container">
            <span className="logo-text">JL</span>
            <span className="logo-dot"></span>
          </div>
        </div>

        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'resources', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-text">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              {section === 'resources' ? ' Projects' : ''}
              <span className="nav-dot"></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header