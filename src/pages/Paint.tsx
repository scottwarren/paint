import React, { useState } from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';

import Canvas from '../components/Canvas';
import ColorPicker from '../components/ColorPicker';

const DEFAULT_RGBA = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};

const Container = styled.div`
  display: flex;
  border-top: solid 2px hsl(0, 0%, 97%);
  border-bottom: solid 2px hsl(0, 0%, 97%);
`;

const ToolbarContainer = styled.div`
  width: 100px;
  border-right: solid 2px hsl(0, 0%, 97%);
  padding: 0.5em;
`;

const CanvasContainer = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

function Paint(): React.ReactElement {
  const [color, setColor] = useState<RGBColor>(DEFAULT_RGBA);

  return (
    <Container>
      <ToolbarContainer>
        <button>Pencil</button>
        <ColorPicker color={color} onChange={({ rgb }) => setColor(rgb)} />
      </ToolbarContainer>
      <CanvasContainer>
        <Canvas color={color} />
      </CanvasContainer>
    </Container>
  );
}

export default Paint;
