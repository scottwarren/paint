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
  border-top: solid 0.5em hsl(0, 0%, 97%);
  border-bottom: solid 0.5em hsl(0, 0%, 97%);
`;

const ToolbarContainer = styled.div`
  width: 6.25em;
  border-right: solid 0.5em hsl(0, 0%, 97%);
  padding: 0.5em;

  display: flex;
  flex-direction: column;
`;

const ToolbarRow = styled.div`
  margin: 0.25em 0;
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
        <ToolbarRow>
          <button>Pencil</button>
        </ToolbarRow>
        <ToolbarRow>
          <ColorPicker color={color} onChange={({ rgb }) => setColor(rgb)} />
        </ToolbarRow>
      </ToolbarContainer>
      <CanvasContainer>
        <Canvas color={color} />
      </CanvasContainer>
    </Container>
  );
}

export default Paint;
