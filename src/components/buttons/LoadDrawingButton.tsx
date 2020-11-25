import React from 'react';
import Button from '@material-ui/core/Button';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Tooltip from '@material-ui/core/Tooltip';

interface LoadDrawingButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function LoadDrawingButton({
  onClick,
}: LoadDrawingButtonProps): React.ReactElement {
  return (
    <Tooltip title='Load Drawing' arrow placement='top'>
      <Button
        variant='contained'
        color='default'
        onClick={onClick}
        component='span'
      >
        <FolderOpenIcon />
      </Button>
    </Tooltip>
  );
}

export default LoadDrawingButton;
