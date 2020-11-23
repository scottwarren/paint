import React, { useEffect, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
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
  const [color, setColor] = useState('rgba(0, 0, 0, 1)');

  let isMouseDown = false;

  let canvas = canvasRef?.current;
  let context = canvas?.getContext('2d');

  useEffect(() => {
    canvas = canvasRef?.current;
    context = canvas?.getContext('2d');
  }, [canvasRef]);

  useEffect(() => {
    if (!canvas) {
      console.log('...waiting for canvas...');
      return;
    }

    // Setting the Canvas height/width so it scales appropriately and doesn't reset to default (300px)
    // Required because I'm using viewport units (rather than a fixed value e.g. px)
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, []);

  const handleMouseDown = () => {
    isMouseDown = true;
    if (!context) {
      console.error('no context yet...');
      debugger;
      return;
    }
    context.beginPath();
    context.strokeStyle = color;
  };

  const handleMouseMove = (ev: React.MouseEvent) => {
    if (!isMouseDown) {
      return;
    }

    if (!context) {
      console.error('no context yet...');
      return;
    }

    if (!canvas) {
      console.error('no canvas yet...');
      return;
    }

    const { x, y } = getMousePos(canvas, ev);

    context.strokeStyle = color;
    context.lineTo(x, y);
    context.stroke();
    context.moveTo(x, y);
  };

  const handleMouseUp = () => {
    isMouseDown = false;

    if (!context) {
      console.error('no context yet...');
      debugger;
      return;
    }

    context.closePath();
  };

  // Make sure that the pen tool doesn't get stuck on if the user exits the viewport
  const handleMouseLeave = () => {
    if (!context) {
      console.error('no context yet...');
      debugger;
      return;
    }
    isMouseDown = false;
    context.closePath();
  };

  return (
    <>
      <ChromePicker
        color={color}
        onChange={({ rgb: { r, g, b, a } }) => {
          setColor(`rgba(${r}, ${g}, ${b}, ${a})`);
        }}
      />
      <PaintingCanvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}

export default Canvas;
