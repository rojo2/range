/**
 * Rets a value from the range between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function from(value, min, max) {
  return (value - min) / (max - min);
}

/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function to(value, min, max) {
  return (value * (max - min)) + min;
}

module.exports = {
  from,
  to
};
