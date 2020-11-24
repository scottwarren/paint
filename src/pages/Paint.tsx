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
  display: flex;
  border-top: solid 0.1em hsl(0, 0%, 97%);
  border-bottom: solid 0.1em hsl(0, 0%, 97%);
`;

const ToolbarContainer = styled.div`
  width: 6.25em;
  border-right: solid 0.1em hsl(0, 0%, 97%);
  padding: 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const CanvasContainer = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

function Paint(): React.ReactElement {
  const [color, setColor] = useState<RGBColor>(DEFAULT_RGBA);
  const [brushSize, setBrushSize] = useState<number>(2);

  return (
    <Container>
      <ToolbarContainer>
        <PencilToolButton />
        <ColorPicker color={color} onChange={({ rgb }) => setColor(rgb)} />
        <button onClick={() => setBrushSize(brushSize + 2)}>
          Increase by 2
        </button>
      </ToolbarContainer>
      <CanvasContainer>
        <Canvas color={color} brushSize={brushSize} />
      </CanvasContainer>
    </Container>
  );
}

export default Paint;
