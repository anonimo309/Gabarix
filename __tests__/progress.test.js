const { computeProgress } = require('../src/progress');

describe('computeProgress', () => {
  it('computes 0% when count is 0', () => {
    expect(computeProgress(0, 500)).toEqual({ pct: 0, label: '0% da meta' });
  });

  it('computes the correct percentage', () => {
    expect(computeProgress(250, 500)).toEqual({ pct: 50, label: '50% da meta' });
  });

  it('rounds the percentage to the nearest integer', () => {
    expect(computeProgress(312, 500)).toEqual({ pct: 62, label: '62% da meta' });
  });

  it('caps at 100% when count exceeds total', () => {
    expect(computeProgress(600, 500)).toEqual({ pct: 100, label: '100% da meta' });
  });

  it('caps at 100% when count equals total', () => {
    expect(computeProgress(500, 500)).toEqual({ pct: 100, label: '100% da meta' });
  });

  it('computes 1% correctly', () => {
    expect(computeProgress(5, 500)).toEqual({ pct: 1, label: '1% da meta' });
  });

  it('handles a total of 1', () => {
    expect(computeProgress(1, 1)).toEqual({ pct: 100, label: '100% da meta' });
  });

  it('rounds 99.5 up to 100', () => {
    // 499/500 = 99.8 => rounds to 100
    expect(computeProgress(499, 500)).toEqual({ pct: 100, label: '100% da meta' });
  });

  it('rounds 99.4 down to 99', () => {
    // 497/500 = 99.4 => rounds to 99
    expect(computeProgress(497, 500)).toEqual({ pct: 99, label: '99% da meta' });
  });
});
