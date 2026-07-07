const { computeCountdown } = require('../src/countdown');

describe('computeCountdown', () => {
  it('returns null when the countdown has expired (diffMs <= 0)', () => {
    expect(computeCountdown(0)).toBeNull();
    expect(computeCountdown(-1000)).toBeNull();
  });

  it('computes exactly 1 day', () => {
    const oneDay = 86400000;
    const result = computeCountdown(oneDay);
    expect(result).toEqual({ days: '01', hours: '00', minutes: '00', seconds: '00' });
  });

  it('computes hours, minutes and seconds within a single day', () => {
    const ms = 3 * 3600000 + 25 * 60000 + 45 * 1000;
    const result = computeCountdown(ms);
    expect(result).toEqual({ days: '00', hours: '03', minutes: '25', seconds: '45' });
  });

  it('computes a complex multi-day difference', () => {
    const ms = 45 * 86400000 + 12 * 3600000 + 30 * 60000 + 15 * 1000;
    const result = computeCountdown(ms);
    expect(result).toEqual({ days: '45', hours: '12', minutes: '30', seconds: '15' });
  });

  it('pads single-digit values with a leading zero', () => {
    const ms = 2 * 86400000 + 5 * 3600000 + 8 * 60000 + 3 * 1000;
    const result = computeCountdown(ms);
    expect(result).toEqual({ days: '02', hours: '05', minutes: '08', seconds: '03' });
  });

  it('handles 1 millisecond remaining', () => {
    const result = computeCountdown(1);
    expect(result).toEqual({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  });

  it('handles exactly 1 second remaining', () => {
    const result = computeCountdown(1000);
    expect(result).toEqual({ days: '00', hours: '00', minutes: '00', seconds: '01' });
  });

  it('handles exactly 59 seconds', () => {
    const result = computeCountdown(59 * 1000);
    expect(result).toEqual({ days: '00', hours: '00', minutes: '00', seconds: '59' });
  });

  it('handles exactly 1 hour', () => {
    const result = computeCountdown(3600000);
    expect(result).toEqual({ days: '00', hours: '01', minutes: '00', seconds: '00' });
  });
});
