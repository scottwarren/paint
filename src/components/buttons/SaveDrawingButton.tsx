import React from 'react';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Tooltip from '@material-ui/core/Tooltip';

interface SaveDrawingButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function SaveDrawingButton({
  onClick,
}: SaveDrawingButtonProps): React.ReactElement {
  return (
    <Tooltip title='Save Drawing as a JSON file' arrow placement='top'>
      <Button
        variant='contained'
        color='default'
        onClick={onClick}
        component='span'
      >
        <SaveAltIcon />
      </Button>
    </Tooltip>
  );
}

export default SaveDrawingButton;
