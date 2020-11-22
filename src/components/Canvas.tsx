import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PaintingCanvas = styled.canvas`
  width: 100vw;
  // TODO: make it fit height of container
  height: 800px;
`;

const LINE_SIZE = 2;

// // TODO: Get colour from pallete
// const STROKE_STYLE = '#000000';

function getMousePos(canvas: HTMLCanvasElement, ev: React.MouseEvent) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: ev.clientX - rect.left,
    y: ev.clientY - rect.top,
  };
}

function Canvas(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let isMouseDown = false;

  let canvas: HTMLCanvasElement | null;
  let context: CanvasRenderingContext2D;
  useEffect(() => {
    canvas = canvasRef.current;
    if (!canvas) {
      console.log('...waiting for canvas...');
      return;
    }

    // Setting the Canvas height/width so it scales appopriately and doesn't reset to default (300px)
    // Required because I'm using a non-fixed width
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    context = canvas.getContext('2d') as CanvasRenderingContext2D;
  }, [canvasRef]);

  // const handleMouseDown = (ev: React.MouseEvent) => {
  const handleMouseDown = () => {
    if (!context) {
      console.error('no context yet...?');
      return;
    }

    isMouseDown = true;
  };

  const handleMouseMove = (ev: React.MouseEvent) => {
    if (!isMouseDown) {
      return;
    }

    if (!context) {
      console.error('no context yet...?');
      return;
    }

    if (!canvas) {
      console.error('no canvas yet...');
      return;
    }

    const { x, y } = getMousePos(canvas, ev);

    context.beginPath();
    // context.moveTo(0, 0);
    context.lineTo(x, y);
    context.stroke();

    context.rect(x, y, LINE_SIZE, LINE_SIZE);
    context.fill();

    context.closePath();

    // x = newX;
    // y = newY;
  };

  const handleMouseUp = () => {
    // const handleMouseUp = (ev: React.MouseEvent) => {
    isMouseDown = false;

    // const { clientX, clientY } = ev;
    // console.log('clientX', clientX);
    // console.log('clientY', clientY);

    // if (!context) {
    //   console.error('no context yet...?');
    //   return;
    // }
    // context.beginPath();
    // context.moveTo(50, 50);
    // context.lineTo(50, 50);
    // context.stroke();

    // // finish path?

    // context.closePath();
  };

  return (
    <PaintingCanvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}

export default Canvas;
