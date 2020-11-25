import React from 'react';
import Button from '@material-ui/core/Button';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import Tooltip from '@material-ui/core/Tooltip';

interface BrushSizeButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function BrushSizeButton({
  onClick,
}: BrushSizeButtonProps): React.ReactElement {
  return (
    <Tooltip title='Brush Size' arrow placement='top'>
      <Button variant='contained' color='default' onClick={onClick}>
        <CreateSharpIcon />
      </Button>
    </Tooltip>
  );
}

export default BrushSizeButton;
