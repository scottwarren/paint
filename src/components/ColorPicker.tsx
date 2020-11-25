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
      <ColorSwatchButton onClick={handlePopoverOpen} />
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
