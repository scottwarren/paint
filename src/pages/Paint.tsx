import React from 'react'

import Canvas from '../components/Canvas'

function draw(ctx: CanvasRenderingContext2D): void {
  ctx.fillStyle = '#000000'

  ctx.beginPath()

  ctx.arc(50, 100, 20, 0, 2 * Math.PI)
  ctx.fill()
}

function Paint(): React.ReactElement {
  return <Canvas draw={draw} />
}

export default Paint
