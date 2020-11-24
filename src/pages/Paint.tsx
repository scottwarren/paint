import React, { useState } from 'react';
import { RGBColor } from 'react-color';
import { Slider } from '@reach/slider';
import styled from 'styled-components';

import '@reach/slider/styles.css';

import Canvas from '../components/Canvas';
import ColorPicker from '../components/ColorPicker';
import PencilToolButton from '../components/buttons/PencilToolButton';

const DEFAULT_RGBA = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};

const Container = styled.div`
  border-top: solid 0.1em hsl(0, 0%, 97%);
  border-bottom: solid 0.1em hsl(0, 0%, 97%);

  display: grid;
  grid-template-areas:
    'toolbar context-menu'
    'toolbar canvas';
  grid-template-columns: 6.25em auto;
`;

const ContextMenuArea = styled.div`
  grid-area: context-menu;
  border: 1px solid red;
  padding: 0.5em;
  display: flex;
  justify-content: center;
`;

const ToolbarArea = styled.div`
  grid-area: toolbar;
  // width: 6.25em;
  border-right: solid 0.1em hsl(0, 0%, 97%);
  padding: 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const CanvasArea = styled.div`
  grid-area: canvas;
`;

function Paint(): React.ReactElement {
  const [color, setColor] = useState<RGBColor>(DEFAULT_RGBA);
  const [brushSize, setBrushSize] = useState<number>(2);

  return (
    <Container>
      <ContextMenuArea>
        <label>Brush Size: {brushSize}px</label>
        <Slider min={1} max={200} value={brushSize} onChange={setBrushSize} />
      </ContextMenuArea>
      <ToolbarArea>
        <PencilToolButton />
        <ColorPicker color={color} onChange={({ rgb }) => setColor(rgb)} />
      </ToolbarArea>
      <CanvasArea>
        <Canvas color={color} brushSize={brushSize} />
      </CanvasArea>
    </Container>
  );
}

export default Paint;
