import React, { useState, useCallback } from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import LayoutContainer from '../layout/Layout';
import Canvas, { Drawing } from '../components/Canvas';
import ColorPicker from '../components/ColorPicker';
import LoadDrawing from '../components/LoadDrawing';
import BrushSizePicker from '../components/BrushSizePicker';
import SaveDrawingButton from '../components/buttons/SaveDrawingButton';
import getCSSColorFromRGBColor from '../utils/get-css-color-from-rgb-color';

const DEFAULT_RGBA = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};

const Container = styled.div`
  border-top: solid 0.1em hsl(0, 0%, 97%);

  display: grid;
  grid-template-areas:
    'toolbar context-menu'
    'toolbar canvas';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content 500px;
  // TODO: Change this to stretch to entire window once the dynamic Canvas width/height issue is solved
`;

const ContextMenuArea = styled.div`
  grid-area: context-menu;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  border-bottom: solid 0.1em hsl(0, 0%, 97%);
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

// Adds ability to create a file with the contents of the drawing represented as JSON
// Source: https://stackoverflow.com/a/53449590/1626678
function downloadDrawing(drawing: Drawing) {
  if (!drawing) return;

  const fileData = JSON.stringify(drawing);

  const blob = new Blob([fileData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.download = `drawing-${new Date().toISOString()}.json`;
  link.href = url;
  link.click();
}

interface PaintProps {
  drawing: Drawing;
  setDrawing: (drawing: Drawing) => void;
}

function Paint({ drawing, setDrawing }: PaintProps): React.ReactElement {
  const [color, setColor] = useState<RGBColor>(DEFAULT_RGBA);
  const [brushSize, setBrushSize] = useState<number>(2);

  const getOpacity = useCallback(() => {
    const alpha = color?.a ?? 1;

    return `${Math.round(alpha * 100)}%`;
  }, [color.a]);

  return (
    <LayoutContainer>
      <Container>
        <ContextMenuArea>
          <Typography>Selected Brush Size: {brushSize}px</Typography>
          <Typography>Selected Colour:</Typography>
          <Tooltip title={getCSSColorFromRGBColor(color)} placement='top'>
            <FiberManualRecordIcon htmlColor={getCSSColorFromRGBColor(color)} />
          </Tooltip>
          <Typography>Selected Opacity: {getOpacity()}</Typography>
        </ContextMenuArea>
        <ToolbarArea>
          <ToolbarContainer>
            <BrushSizePicker brushSize={brushSize} onChange={setBrushSize} />
            <ColorPicker color={color} onChange={({ rgb }) => setColor(rgb)} />
            <SaveDrawingButton onClick={() => downloadDrawing(drawing)} />
            <LoadDrawing onLoad={setDrawing} />
          </ToolbarContainer>
        </ToolbarArea>
        <CanvasArea>
          <Canvas
            color={color}
            brushSize={brushSize}
            onChange={setDrawing}
            initialDrawing={drawing}
          />
        </CanvasArea>
      </Container>
    </LayoutContainer>
  );
}

export default Paint;
