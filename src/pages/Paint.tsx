import React from 'react'

import Canvas from '../components/Canvas'

const draw = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = '#000000'

  ctx.beginPath()

  ctx.arc(50, 100, 20, 0, 2 * Math.PI)
  ctx.fill()
}

function Paint() {
  return <Canvas draw={draw} />
}

export default Paint
