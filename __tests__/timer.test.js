const { computeTimer } = require('../src/timer');

describe('computeTimer', () => {
  const TWO_HOURS = 2 * 60 * 60;

  it('returns expired state when remaining is 0', () => {
    expect(computeTimer(0, TWO_HOURS)).toEqual({ display: 'Chegando!', widthPct: 0 });
  });

  it('returns expired state when remaining is negative', () => {
    expect(computeTimer(-10, TWO_HOURS)).toEqual({ display: 'Chegando!', widthPct: 0 });
  });

  it('computes full timer at start (2 hours)', () => {
    const result = computeTimer(TWO_HOURS, TWO_HOURS);
    expect(result.display).toBe('02:00:00');
    expect(result.widthPct).toBe(100);
  });

  it('computes half-way (1 hour left)', () => {
    const result = computeTimer(3600, TWO_HOURS);
    expect(result.display).toBe('01:00:00');
    expect(result.widthPct).toBe(50);
  });

  it('computes minutes and seconds', () => {
    const remaining = 1 * 3600 + 30 * 60 + 45;
    const result = computeTimer(remaining, TWO_HOURS);
    expect(result.display).toBe('01:30:45');
  });

  it('pads single-digit hours, minutes and seconds', () => {
    const remaining = 0 * 3600 + 5 * 60 + 3;
    const result = computeTimer(remaining, TWO_HOURS);
    expect(result.display).toBe('00:05:03');
  });

  it('computes 1 second remaining', () => {
    const result = computeTimer(1, TWO_HOURS);
    expect(result.display).toBe('00:00:01');
    expect(result.widthPct).toBeCloseTo(1 / TWO_HOURS * 100, 5);
  });

  it('computes the width percentage accurately', () => {
    const remaining = 1800;
    const result = computeTimer(remaining, TWO_HOURS);
    expect(result.widthPct).toBe(25);
  });
});
