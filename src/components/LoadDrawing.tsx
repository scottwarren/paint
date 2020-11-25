import React from 'react';
import styled from 'styled-components';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import LoadDrawingButton from './buttons/LoadDrawingButton';
import { Drawing } from './Canvas';

interface LoadDrawingProps {
  onLoad: (drawing: Drawing) => void;
}

const Container = styled.div`
  min-width: 10em;
  padding: 0.5em 1em;
`;

function LoadDrawing({ onLoad }: LoadDrawingProps): React.ReactElement {
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
      <LoadDrawingButton onClick={handlePopoverOpen} />
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
          <Typography gutterBottom>Load previously saved drawing</Typography>
          <div>load me pls</div>
        </Container>
      </Popover>
    </>
  );
}

export default LoadDrawing;
