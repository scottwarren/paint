import React, { useState } from 'react';
import {
  ChromePicker,
  ColorPickerProps as ReactColorPickerProps,
} from 'react-color';
import styled from 'styled-components';

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
  onChangeComplete,
}: ReactColorPickerProps<Record<string, unknown>>): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ColorPickerButton onClick={() => setIsOpen(true)}>
        Color
      </ColorPickerButton>
      {isOpen && (
        <>
          <Background onClick={() => setIsOpen(false)} />
          <Popover>
            <ChromePicker
              color={color}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </Popover>
        </>
      )}
    </>
  );
}

export default ColorPicker;
