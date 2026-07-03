const { pad } = require('../src/utils');

describe('pad', () => {
  it('pads single-digit numbers with a leading zero', () => {
    expect(pad(0)).toBe('00');
    expect(pad(1)).toBe('01');
    expect(pad(9)).toBe('09');
  });

  it('leaves two-digit numbers unchanged', () => {
    expect(pad(10)).toBe('10');
    expect(pad(59)).toBe('59');
    expect(pad(99)).toBe('99');
  });

  it('preserves numbers with more than two digits', () => {
    expect(pad(100)).toBe('100');
    expect(pad(999)).toBe('999');
  });
});
