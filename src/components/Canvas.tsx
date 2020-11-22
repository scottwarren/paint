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
    // Required because I'm using viewport units (rather than a fixed value e.g. px)
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    context = canvas.getContext('2d') as CanvasRenderingContext2D;
  }, [canvasRef]);

  // const handleMouseDown = (ev: React.MouseEvent) => {
  const handleMouseDown = () => {
    isMouseDown = true;
    context.beginPath();
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

    context.lineTo(x, y);
    context.stroke();
    context.moveTo(x, y);
  };

  const handleMouseUp = () => {
    // const handleMouseUp = (ev: React.MouseEvent) => {
    isMouseDown = false;
    context.closePath();
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
