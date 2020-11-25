import React, { useEffect, useState, useRef } from 'react';
import { RGBColor } from 'react-color';
import { fabric } from 'fabric';

import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

export type DrawingObject = {
  stroke: string;
  width: number;
  strokeWidth: number;
};

// Because Fabric says that a drawing can be "any", I'm defining the type as much as I know about it here
export type Drawing = { version?: string; objects?: Partial<DrawingObject[]> };

interface CanvasProps {
  color: RGBColor;
  brushSize: number;
  onChange: (drawing: Drawing) => void;
  initialDrawing: Drawing;
}

const noop = () => null;

function Canvas({
  color,
  brushSize,
  onChange,
  initialDrawing,
}: CanvasProps): React.ReactElement {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas>();

  useEffect(() => {
    if (!canvasRef?.current) return;

    const newCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      freeDrawingCursor: 'round',
      fill: getCSSColorFromRGBColor(color),
      width: 1022,
      height: 500,
    });

    // This allows the option to "seed" the canvas with an existing drawing
    if (initialDrawing) {
      newCanvas.loadFromJSON(initialDrawing, noop);
    }

    // Bind events to save the drawing whenever something is added on the canvas
    newCanvas.on('mouse:up', () => {
      if (!newCanvas) {
        return;
      }

      onChange(newCanvas.toObject());
    });

    setCanvas(newCanvas);
  }, []);

  useEffect(() => {
    if (!canvas) return;

    canvas.loadFromJSON(initialDrawing, () => {
      setCanvas(canvas);
    });
  }, [initialDrawing]);

  // Adjust the color of the stroke/brush when that is changed
  useEffect(() => {
    if (!canvas) return;

    canvas.freeDrawingBrush.color = getCSSColorFromRGBColor(color);

    setCanvas(canvas);
  }, [color]);

  // Adjust stroke/brush size/width whenever that is changed
  useEffect(() => {
    if (!canvas) return;

    canvas.freeDrawingBrush.width = brushSize;
    setCanvas(canvas);
  }, [brushSize]);

  return <canvas ref={canvasRef} id='paint-canvas' />;
}

export default Canvas;
