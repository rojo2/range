/**
 * Returns a value between `min` and `max`. If `value` is between `min` and `max` it returns `value`. If `value` is less than
 * `min` then it returns `min`. If `value` is greater than `max` then it returns `max`.
 * @param {number} value - Value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Value between `min` and `max`
 */
module.exports = function(value, min, max) {
	if (value < min) return min;
	if (value > max) return max;
	return value;
};
