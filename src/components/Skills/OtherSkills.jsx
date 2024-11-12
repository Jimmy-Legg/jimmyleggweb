const OtherSkills = () => {
    const handleImageClick = (imageId) => {
      const img = document.getElementById(imageId)
      img.classList.toggle('enlarged')
    }
  
    return (
      <div className="other" data-aos="fade-right">
        <img data-aos="zoom-in" src="/images/lamp.png" alt="Other Skills" />
        <div>
          <h2>Other skills</h2>
          <div className="logo">
            <img src="/images/blender.png" alt="Blender" />
          </div>
          <div className="temple">
            <img 
              id="temple-image" 
              src="/images/temple.png" 
              alt="Temple" 
              onClick={() => handleImageClick('temple-image')} 
            />
            <img 
              id="candle-image" 
              src="/images/candle.jpg" 
              alt="Candle" 
              onClick={() => handleImageClick('candle-image')} 
            />
            <img 
              id="well-image" 
              src="/images/well.jpg" 
              alt="Well" 
              onClick={() => handleImageClick('well-image')} 
            />
            <img 
              id="3D-animation-gif" 
              src="/images/3D.gif" 
              alt="3D Animation" 
              onClick={() => handleImageClick('3D-animation-gif')} 
            />
            <img 
              id="3D-ronde-gif" 
              src="/images/rond3D.gif" 
              alt="3D Ronde" 
              onClick={() => handleImageClick('3D-ronde-gif')} 
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default OtherSkills