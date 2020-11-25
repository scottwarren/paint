import React from 'react';
import Button from '@material-ui/core/Button';
import ColorizeSharpIcon from '@material-ui/icons/ColorizeSharp';
import Tooltip from '@material-ui/core/Tooltip';

interface ColorSwatchButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function ColorSwatchButton({
  onClick,
}: ColorSwatchButtonProps): React.ReactElement {
  return (
    <Tooltip title='Change Colour' arrow placement='right'>
      <Button
        variant='contained'
        color='primary'
        onClick={onClick}
        component='span'
      >
        <ColorizeSharpIcon />
      </Button>
    </Tooltip>
  );
}

export default ColorSwatchButton;
