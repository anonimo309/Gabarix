const { pad } = require('./utils');

/**
 * Computes the display values for a regressive timer (used on the
 * "obrigado" / thank-you page).
 * @param {number} remaining - Remaining seconds.
 * @param {number} totalSecs - Total timer duration in seconds.
 * @returns {{ display: string, widthPct: number }}
 */
function computeTimer(remaining, totalSecs) {
  if (remaining <= 0) {
    return { display: 'Chegando!', widthPct: 0 };
  }
  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  const display = pad(h) + ':' + pad(m) + ':' + pad(s);
  const widthPct = (remaining / totalSecs) * 100;
  return { display, widthPct };
}

module.exports = { computeTimer };
