import React, { useState } from 'react';
import {
  RGBColor,
  ChromePicker,
  ColorPickerProps as ReactColorPickerProps,
} from 'react-color';
import styled from 'styled-components';
import { Slider } from '@reach/slider';

import ColorSwatchButton from './ColorSwatchButton';

// ReactColorPickerProps allows the color to be HSL/RGB/string/undefined
// but we convert the color from RGBColor to an rgba string. which means
// we want to be very specific about the input so we can convert it successfully
interface ColorPickerProps
  extends ReactColorPickerProps<Record<string, unknown>> {
  color: RGBColor;
}

const Popover = styled.div`
  position: relative;
  // Required because the Slider component has its own built-in stacking context/specific z-index set
  z-index: 2;
`;

const ColorPickerContainer = styled.div`
  position: absolute;
  left: 2em;
  top: -3em;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.33);
`;

function ColorPicker({
  color,
  onChange,
  onChangeComplete,
}: ColorPickerProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ColorSwatchButton
        selectedColor={color}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <>
          <Background onClick={() => setIsOpen(false)} />
          <Popover>
            <ColorPickerContainer>
              <ChromePicker
                color={color}
                onChange={onChange}
                onChangeComplete={onChangeComplete}
              />
            </ColorPickerContainer>
          </Popover>
        </>
      )}
    </>
  );
}

export default ColorPicker;
