import React from 'react';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Tooltip from '@material-ui/core/Tooltip';

function PencilToolButton(): React.ReactElement {
  return (
    <Tooltip title='Pencil Tool' arrow placement='right'>
      <Button variant='contained' color='primary'>
        <BorderColorIcon />
      </Button>
    </Tooltip>
  );
}

export default PencilToolButton;
