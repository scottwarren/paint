import React from 'react';
import { RGBColor } from 'react-color';
import styled from 'styled-components';

import getCSSColorFromColor from '../utils/get-css-color-from-rgb-color';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selectedColor: RGBColor;
}

interface ColorPickerButtonProps {
  selectedColor: RGBColor;
}

const ColorPickerButton = styled.button`
  display: inline-block;
  padding: 0.25em;
  background: #fff;
  border-radius: 0.125em;
  box-shadow: 0 0 0 0.0625em rgba(0, 0, 0, 0.1);
  border: 0;
  cursor: pointer;
`;

const SingleSwatch = styled.span<ColorPickerButtonProps>`
  background: ${({ selectedColor }) => getCSSColorFromColor(selectedColor)};
  width: 2.5em;
  height: 1.25em;
  border-radius: 0.125em;
  display: block;
`;

function ColorSwatchButton({
  onClick,
  selectedColor,
}: Props): React.ReactElement {
  return (
    <ColorPickerButton onClick={onClick}>
      <SingleSwatch selectedColor={selectedColor} />
    </ColorPickerButton>
  );
}

export default ColorSwatchButton;
