import React from 'react';
import {
  RGBColor,
  ChromePicker,
  ColorPickerProps as ReactColorPickerProps,
} from 'react-color';

import Popover from '@material-ui/core/Popover';

import ColorSwatchButton from './ColorSwatchButton';

// ReactColorPickerProps allows the color to be HSL/RGB/string/undefined
// but we convert the color from RGBColor to an rgba string. which means
// we want to be very specific about the input so we can convert it successfully
interface ColorPickerProps
  extends ReactColorPickerProps<Record<string, unknown>> {
  color: RGBColor;
}

function ColorPicker({
  color,
  onChange,
  onChangeComplete,
}: ColorPickerProps): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <>
      <ColorSwatchButton selectedColor={color} onClick={handlePopoverOpen} />
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
        <ChromePicker
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      </Popover>
    </>
  );
}

export default ColorPicker;
