export const setupCanvas = (canvas) => {
    const NUM_CONFETTI = 300
    const COLORS = [[238, 170, 69], [216, 112, 32], [169, 51, 0], [238, 132, 87], [248, 182, 70]]
    const PI_2 = 2 * Math.PI
  
    const context = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth * 2
    let h = canvas.height = window.innerHeight * 2
  
    const range = (a, b) => (b - a) * Math.random() + a
  
    const drawCircle = (x, y, r, style) => {
      context.beginPath()
      context.arc(x, y, r, 0, PI_2, false)
      context.fillStyle = style
      context.fill()
    }
  
    // Rest of your canvas animation code...
    // (Copy the relevant parts from your confetti.js)
  }