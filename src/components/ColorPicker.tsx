import React, { useState } from 'react';
import { ChromePicker, RGBColor, ColorChangeHandler } from 'react-color';
import styled from 'styled-components';

interface ColorPickerProps {
  color: RGBColor;
  onChange: ColorChangeHandler;
}

const Popover = styled.div`
  position: absolute;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const ColorPickerButton = styled.button``;

function ColorPicker({
  color,
  onChange,
}: ColorPickerProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ColorPickerButton onClick={() => setIsOpen(true)}>
        Color
      </ColorPickerButton>
      {isOpen && (
        <Popover>
          <Background onClick={() => setIsOpen(false)} />
          <ChromePicker color={color} onChange={onChange} />
        </Popover>
      )}
    </>
  );
}

export default ColorPicker;
