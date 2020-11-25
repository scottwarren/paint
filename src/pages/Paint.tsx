import React, { useState } from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Canvas from '../components/Canvas';
import ColorPicker from '../components/ColorPicker';
import BrushSizePicker from '../components/BrushSizePicker';
import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
  grid-template-columns: min-content auto;
  grid-template-rows: min-content 100%;
  height: 100vh;
`;

const ContextMenuArea = styled.div`
  grid-area: context-menu;
  border: 1px solid red;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const ToolbarArea = styled.div`
  grid-area: toolbar;
  border-right: solid 0.1em hsl(0, 0%, 97%);
  padding: 0.5em;
`;

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  border-radius: 0.5em;
  padding: 0.5em;
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
        <Typography>Brush Size {brushSize}px</Typography>
        <Typography>Selected Colour:</Typography>
        <FiberManualRecordIcon htmlColor={getCSSColorFromRGBColor(color)} />
      </ContextMenuArea>
      <ToolbarArea>
        <ToolbarContainer>
          <BrushSizePicker brushSize={brushSize} onChange={setBrushSize} />
          <ColorPicker color={color} onChange={({ rgb }) => setColor(rgb)} />
        </ToolbarContainer>
      </ToolbarArea>
      <CanvasArea>
        <Canvas color={color} brushSize={brushSize} />
      </CanvasArea>
    </Container>
  );
}

export default Paint;
