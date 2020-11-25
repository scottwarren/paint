import React, { useEffect, useState, useCallback, useRef } from 'react';
import { RGBColor } from 'react-color';
import { fabric } from 'fabric';

import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

interface CanvasProps {
  color: RGBColor;
  brushSize: number;
  onChange: (drawing?: string) => void;
}

function Canvas({
  color,
  brushSize,
  onChange,
}: CanvasProps): React.ReactElement {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas>();

  useEffect(() => {
    if (!canvasRef?.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      freeDrawingCursor: 'round',
      fill: getCSSColorFromRGBColor(color),
      width: 1022,
      height: 500,
    });

    setCanvas(canvas);
  }, [canvasRef]);

  // const ref = useFabric(color);

  // TODO: Load initial drawing from state

  useEffect(() => {
    if (!canvas) return;

    function saveDrawing() {
      onChange(canvas?.toJSON());
    }

    // Bind events to save the drawing whenever something is added on the canvas
    canvas.on('object:added', saveDrawing);
    canvas.on('object:modified', saveDrawing);
    canvas.on('object:removed', saveDrawing);
  }, [color]);

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

  useEffect(() => {
    if (!canvas) return;

    console.log('canvas information');

    console.log(canvas.freeDrawingBrush.width);
    console.log(canvas.freeDrawingBrush.color);
  });

  return <canvas ref={canvasRef} id='paint-canvas' />;
}

export default Canvas;
