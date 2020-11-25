import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';
import { fabric } from 'fabric';

import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

const PaintingCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

interface CanvasProps {
  color: RGBColor;
  brushSize: number;
}

function Canvas({ color, brushSize }: CanvasProps): React.ReactElement {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    setCanvas(
      new fabric.Canvas('paint-canvas', {
        isDrawingMode: true,
        freeDrawingCursor: 'round',
        fill: getCSSColorFromRGBColor(color),
      })
    );

    return () => {
      if (!canvas) return;

      canvas.dispose();
    };
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

  return (
    <Container>
      <PaintingCanvas id='paint-canvas' />
    </Container>
  );
}

export default Canvas;
