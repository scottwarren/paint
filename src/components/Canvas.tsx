import React, { useEffect, useRef } from 'react';

const LINE_WIDTH = 2;

// TODO: Get colour from pallete
const STROKE_STYLE = '#000000';

function Canvas(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let isMouseDown = false;

  let context: CanvasRenderingContext2D;

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.log('...waiting for canvas...');
      return;
    }

    context = canvas.getContext('2d') as CanvasRenderingContext2D;
  }, [canvasRef]);

  const handleMouseDown = (ev: React.MouseEvent) => {
    // get the mouse co-ordinates to know where the "start" is of the drawing
    const { clientX, clientY } = ev;

    console.log('clientX', clientX);
    console.log('clientY', clientY);

    if (!context) {
      return;
    }

    isMouseDown = true;

    context.beginPath();
    context.lineWidth = LINE_WIDTH;
    context.strokeStyle = STROKE_STYLE;

    context.moveTo(clientX, clientY);

    return true;
  };

  const handleMouseMove = (ev: React.MouseEvent) => {
    if (!isMouseDown) {
      return;
    }

    const { clientX, clientY } = ev;
    console.log('clientX', clientX);
    console.log('clientY', clientY);

    if (!context) {
      return;
    }

    context.beginPath();
    context.lineWidth = LINE_WIDTH;
    context.strokeStyle = STROKE_STYLE;

    context.moveTo(clientX, clientY);
  };

  const handleMouseUp = (ev: React.MouseEvent) => {
    isMouseDown = false;

    const { clientX, clientY } = ev;
    console.log('clientX', clientX);
    console.log('clientY', clientY);
    if (!context) {
      return;
    }
    // finish path?
    context.lineTo(clientX, clientY);
    context.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: '100vw' }}
    />
  );
}

export default Canvas;
