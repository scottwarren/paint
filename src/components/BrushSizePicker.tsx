import React from 'react';
import styled from 'styled-components';

import Slider from '@material-ui/core/Slider';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import BrushSizeButton from './buttons/BrushSizeButton';

interface BrushSizePickerProps {
  onChange: (newBrushSize: number) => void;
  brushSize: number;
}

const Container = styled.div`
  min-width: 10em;
  padding: 0.5em 1em;
`;

function BrushSizePicker({
  onChange,
  brushSize,
}: BrushSizePickerProps): React.ReactElement {
  // Having a reference to the anchorElement itself is how Material UI manages the position of the Popover
  // since we set slight adjustments to the position relative to the trigger/button itself
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // We could use a separate piece of state for this Boolean, but since the default value is a fals-y value
  // we can "cheat" a little bit by casting the value to a Boolean
  const isOpen = Boolean(anchorEl);

  return (
    <>
      <BrushSizeButton onClick={handlePopoverOpen} />
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <Container>
          <Typography id='continuous-slider' gutterBottom>
            Brush Size {brushSize}px
          </Typography>
          <Slider
            value={brushSize}
            getAriaValueText={(value) => `Brush Size: ${value}`}
            min={1}
            max={200}
            onChange={(_, newBrushSize) => onChange(newBrushSize as number)}
          />
        </Container>
      </Popover>
    </>
  );
}

export default BrushSizePicker;
