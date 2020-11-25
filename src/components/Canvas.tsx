import React, { useEffect, useState } from 'react';
import { RGBColor } from 'react-color';
import { fabric } from 'fabric';

import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

interface CanvasProps {
  color: RGBColor;
  brushSize: number;
}

function Canvas({ color, brushSize }: CanvasProps): React.ReactElement {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas('paint-canvas', {
      isDrawingMode: true,
      freeDrawingCursor: 'round',
      fill: getCSSColorFromRGBColor(color),
    });
    setCanvas(newCanvas);
  }, []);

  useEffect(() => {
    if (!canvas) return;

    canvas.freeDrawingBrush.color = getCSSColorFromRGBColor(color);

    setCanvas(canvas);
  }, [color]);

  useEffect(() => {
    if (!canvas) return;

    canvas.freeDrawingBrush.width = brushSize;

    setCanvas(canvas);
  }, [brushSize]);

  // TODO: Solve dynamic/stretch width and height of the canvas
  return <canvas id='paint-canvas' width={1022} height={500} />;
}

export default Canvas;
