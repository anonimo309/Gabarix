/**
 * Computes the progress percentage given the current count and the target.
 * @param {number} count - Current count of sign-ups.
 * @param {number} total - Target total.
 * @returns {{ pct: number, label: string }}
 */
function computeProgress(count, total) {
  const pct = Math.min(Math.round((count / total) * 100), 100);
  return { pct, label: pct + '% da meta' };
}

module.exports = { computeProgress };
