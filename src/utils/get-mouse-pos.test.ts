import { MouseEvent } from 'react';

import getMousePos from './get-mouse-pos';

const MockMouseEvent = ({
  clientX: 150,
  clientY: 50,
} as unknown) as MouseEvent;

const MockCanvas = ({
  getBoundingClientRect: () => ({ left: 50, top: 20 }),
} as unknown) as HTMLCanvasElement;

describe('get mouse position from Canvas and a mouse event', () => {
  it('should calculate the co-ordinates offset by the position of the canvas', () => {
    expect(getMousePos(MockCanvas, MockMouseEvent)).toEqual({ x: 100, y: 30 });
  });
});
