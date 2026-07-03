const { pad } = require('./utils');

/**
 * Computes the remaining days, hours, minutes and seconds from a
 * millisecond difference.
 * @param {number} diffMs - Remaining time in milliseconds (launch - now).
 * @returns {{ days: string, hours: string, minutes: string, seconds: string } | null}
 *   null when the countdown has expired (diffMs <= 0).
 */
function computeCountdown(diffMs) {
  if (diffMs <= 0) return null;

  const days    = pad(Math.floor(diffMs / 86400000));
  const hours   = pad(Math.floor((diffMs % 86400000) / 3600000));
  const minutes = pad(Math.floor((diffMs % 3600000) / 60000));
  const seconds = pad(Math.floor((diffMs % 60000) / 1000));

  return { days, hours, minutes, seconds };
}

module.exports = { computeCountdown };
