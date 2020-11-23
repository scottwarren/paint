import React, { useEffect, useRef, useState } from 'react';
import { ChromePicker, RGBColor } from 'react-color';
import styled from 'styled-components';

import getMousePos from '../utils/get-mouse-pos';
import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

const PaintingCanvas = styled.canvas`
  width: 100vw;
  // TODO: make it fit height of container
  height: 800px;
`;

const DEFAULT_RGB = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};

function Canvas(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState<RGBColor>(DEFAULT_RGB);

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

    context.strokeStyle = getCSSColorFromRGBColor(color);
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
    context.lineTo(x, y);
    context.stroke();
    context.moveTo(x, y);
  };

  const handleMouseUp = () => {
    isMouseDown = false;

    context?.closePath();
  };

  // Make sure that the pen tool doesn't get stuck on if the user exits the viewport
  const handleMouseLeave = () => {
    isMouseDown = false;
    context?.closePath();
  };

  return (
    <>
      <ChromePicker color={color} onChange={({ rgb }) => setColor(rgb)} />
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
