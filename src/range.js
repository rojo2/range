/**
 * Returns the lower part between -Infinity and `max`
 * @param {number} value
 * @param {number} max
 * @returns {number}
 */
export function lower(value, max) {
  if (value > max) return max
  return value
}

/**
 * Returns the upper part between `min` and +Infinity
 * @param {number} value 
 * @param {number} min
 * @returns {number}
 */
export function upper(value, min) {
  if (value < min) return min
  return value
}

/**
 * Clamps a number between `min` and `max` 
 * @param {number} value
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function clamp(value, min, max) {
  if (value < min) return min
  if (value > max) return max
  return value
}

/**
 * Returns the linearly extrapolated between `min` and `max`.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function from(value, min, max) {
  return (value - min) / (max - min);
}

/**
 * Returns the linearly interpolated value between `min` and `max`.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function to(value, min, max) {
  return (value * (max - min)) + min;
}

/**
 * Transforms linearly from a range into another range.
 * @param {number} value
 * @param {number} fromMin
 * @param {number} fromMax 
 * @param {number} toMin 
 * @param {number} toMax 
 * @returns {number} 
 */
export function fromTo(value, fromMin, fromMax, toMin, toMax) {
  return to(from(value, fromMin, fromMax), toMin, toMax)
}

export default {
  upper,
  lower,
  clamp,
  from,
  to,
  fromTo
}
