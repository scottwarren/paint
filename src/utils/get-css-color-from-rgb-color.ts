import { RGBColor } from 'react-color';

export default function getCSSColorFromRGBColor({
  r,
  g,
  b,
  a = 1,
}: RGBColor): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
