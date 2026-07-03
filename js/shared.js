/* ══════════════════════════════════════════════════════════════
   shared.js — Common utilities used across all Gabarix pages
   ══════════════════════════════════════════════════════════════ */

/**
 * Pads a number with leading zeros to at least 2 digits.
 * @param {number} n
 * @returns {string}
 */
function pad(n) {
  return String(n).padStart(2, '0');
}
