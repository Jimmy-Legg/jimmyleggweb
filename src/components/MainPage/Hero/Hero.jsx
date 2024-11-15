import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth <= 768
    if (isMobile) return // Don't initialize canvas on mobile

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    
    const particles = []
    const properties = {
      bgColor: 'rgba(0, 0, 0, 1)',
      particleColor: 'rgba(255, 255, 255, 0.5)',
      particleRadius: 3,
      particleCount: 80,
      particleMaxVelocity: 1,
      lineLength: 100,
      particleLife: 6,
      mouseRadius: 200
    }

    class Particle {
      constructor() {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity
        this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity
        this.life = Math.random() * properties.particleLife * 60
        this.baseVelocityX = this.velocityX
        this.baseVelocityY = this.velocityY
      }

      position() {
        // Check boundaries
        if ((this.x + this.velocityX > w && this.velocityX > 0) || 
            (this.x + this.velocityX < 0 && this.velocityX < 0)) {
          this.velocityX *= -1
        }
        if ((this.y + this.velocityY > h && this.velocityY > 0) || 
            (this.y + this.velocityY < 0 && this.velocityY < 0)) {
          this.velocityY *= -1
        }

        // React to mouse
        const dx = this.x - mouseRef.current.x
        const dy = this.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < properties.mouseRadius) {
          const force = (properties.mouseRadius - distance) / properties.mouseRadius
          const angle = Math.atan2(dy, dx)
          
          this.velocityX = this.baseVelocityX + (Math.cos(angle) * force * 0.2)
          this.velocityY = this.baseVelocityY + (Math.sin(angle) * force * 0.2)
        } else {
          // Gradually return to base velocity
          this.velocityX = this.velocityX * 0.98 + this.baseVelocityX * 0.001
          this.velocityY = this.velocityY * 0.98 + this.baseVelocityY * 0.001
        }

        this.x += this.velocityX
        this.y += this.velocityY
      }

      reDraw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = properties.particleColor
        ctx.fill()
      }

      reCalculateLife() {
        if (this.life < 1) {
          this.x = Math.random() * w
          this.y = Math.random() * h
          this.velocityX = Math.random() * (properties.particleMaxVelocity * 0.2) - properties.particleMaxVelocity
          this.velocityY = Math.random() * (properties.particleMaxVelocity * 0.2) - properties.particleMaxVelocity
          this.baseVelocityX = this.velocityX
          this.baseVelocityY = this.velocityY
          this.life = Math.random() * properties.particleLife * 60
        }
        this.life--
      }
    }

    function reDrawBackground() {
      ctx.fillStyle = properties.bgColor
      ctx.fillRect(0, 0, w, h)
    }

    function drawLines() {
      let x1, y1, x2, y2, length, opacity
      for (let i in particles) {
        for (let j in particles) {
          x1 = particles[i].x
          y1 = particles[i].y
          x2 = particles[j].x
          y2 = particles[j].y
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength
            ctx.lineWidth = '0.5'
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.closePath()
            ctx.stroke()
          }
        }
      }

      // Draw lines from mouse to nearby particles
      particles.forEach(particle => {
        const dx = particle.x - mouseRef.current.x
        const dy = particle.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < properties.mouseRadius) {
          const opacity = 1 - distance / properties.mouseRadius
          ctx.lineWidth = '0.5'
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(mouseRef.current.x, mouseRef.current.y)
          ctx.lineTo(particle.x, particle.y)
          ctx.closePath()
          ctx.stroke()
        }
      })
    }

    function reDrawParticles() {
      for (let i in particles) {
        particles[i].reCalculateLife()
        particles[i].position()
        particles[i].reDraw()
      }
    }

    function loop() {
      reDrawBackground()
      reDrawParticles()
      drawLines()
      requestAnimationFrame(loop)
    }

    function init() {
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle)
      }
      loop()
    }

    // Mouse move handler
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    // Touch move handler
    function handleTouchMove(e) {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      }
    }

    init()

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    
    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    })

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return (
    <div className="hero" id="home">
      <div className="textCenter">
        <span className="typing-animation">
          Welcome to Jimmy Legg's website !
        </span>
      </div>
      <div className="textCenterUnder">
        <span className="typing-animation1">
          Here you will find all information about me, my skills, my projects and my contact information.
        </span>
      </div>
      <a href="#about" className="arrow">
        <img src="/images/down-arrow.svg" alt="Scroll down" />
      </a>
      <canvas ref={canvasRef} id="canvas" className="hero-canvas"></canvas>
    </div>
  )
}

export default Hero