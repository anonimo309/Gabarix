/**
 * Zero-pads a number to at least 2 digits.
 * @param {number} n
 * @returns {string}
 */
function pad(n) {
  return String(n).padStart(2, '0');
}

module.exports = { pad };
