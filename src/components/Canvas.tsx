import React, { useEffect, useRef } from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';

import getMousePos from '../utils/get-mouse-pos';
import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

const PaintingCanvas = styled.canvas`
  width: 100%;
  // TODO: make it fit height of container
  height: 800px;
`;

interface CanvasProps {
  color: RGBColor;
  brushSize: number;
}

function Canvas({ color, brushSize }: CanvasProps): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  let isMouseDown = false;

  let canvas = canvasRef?.current;
  let context = canvas?.getContext('2d');

  // Any time the color changes, update the stroke of the line we're drawing
  useEffect(() => {
    if (context) {
      context.strokeStyle = getCSSColorFromRGBColor(color);
    }
  }, [color]);

  useEffect(() => {
    if (context) {
      context.lineWidth = brushSize;
    }
  }, [brushSize]);

  // Any time canvasRef changes, we need to set the canvas/context variables so we have access to the correct canvas
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

  const handleMouseDown = (ev: React.MouseEvent) => {
    isMouseDown = true;

    if (!context) {
      console.error('no context yet...');
      debugger;
      return;
    }

    if (!canvas) {
      console.error('no canvas yet...');
      return;
    }

    context.beginPath();
    const { x, y } = getMousePos(canvas, ev);

    context.strokeStyle = getCSSColorFromRGBColor(color);
    context.lineWidth = brushSize;
    context.lineCap = 'round';
    context.lineTo(x, y);
    context.stroke();
    context.moveTo(x, y);
  };

  const handleMouseMove = (ev: React.MouseEvent) => {
    if (!context) {
      console.error('no context yet...');
      return;
    }

    if (!canvas) {
      console.error('no canvas yet...');
      return;
    }

    // The mouse being pressed indicates the user is drawing
    if (!isMouseDown) {
      return;
    }

    const { x, y } = getMousePos(canvas, ev);

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  };

  const handleMouseUp = () => {
    isMouseDown = false;

    context?.closePath();
  };

  // Make sure that the pen tool doesn't get stuck on if the user exits the canvas
  const handleMouseLeave = () => {
    isMouseDown = false;
    context?.closePath();
  };

  return (
    <PaintingCanvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default Canvas;
