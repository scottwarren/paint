import getCSSColorFromRGBColor from './get-css-color-from-rgb-color';

const BLACK_SEMI_TRANSPARENT = { r: 0, g: 0, b: 0, a: 0.5 };

const WHITE = { r: 255, g: 255, b: 255 };

describe('get CSS RGBA string from RGBColor', () => {
  it('should return a valid RGBA css string', () => {
    expect(getCSSColorFromRGBColor(BLACK_SEMI_TRANSPARENT)).toBe(
      'rgba(0, 0, 0, 0.5)'
    );
  });

  it('should return valid RGBA even without an alpha channel', () => {
    expect(getCSSColorFromRGBColor(WHITE)).toBe('rgba(255, 255, 255, 1)');
  });
});
