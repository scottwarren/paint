import React, { useState } from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';

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
  grid-template-columns: 3em auto;
  grid-template-rows: min-content 100%;
  height: 100vh;
`;

const ContextMenuArea = styled.div`
  grid-area: context-menu;
  border: 1px solid red;
  padding: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ToolbarArea = styled.div`
  grid-area: toolbar;
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
        {/* <Slider min={1} max={200} value={brushSize} onChange={setBrushSize} /> */}
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
