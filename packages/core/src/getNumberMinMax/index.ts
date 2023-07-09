import { isNumber } from "../isNumber";

/**
 * Get the minimum and maximum values within a range of safe integers in correct order.
 *
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns [minimum, maximum]
 * 
 * @category Number
 * 
 * @example
 * ```ts
 * getNumberMinMax(1, 2); // => [1, 2]
 * getNumberMinMax(2, 1); // => [1, 2]
 * getNumberMinMax(1); // => [1, 9007199254740991]
 * getNumberMinMax(); // => [-9007199254740991, 9007199254740991]
 * ```
 */
function getNumberMinMax(min: unknown = Number.MIN_SAFE_INTEGER, max: unknown = Number.MAX_SAFE_INTEGER): [number, number] {
  let minimum = isNumber(min) && min >= Number.MIN_SAFE_INTEGER && min <= Number.MAX_SAFE_INTEGER ? min : Number.MIN_SAFE_INTEGER;
  let maximum = isNumber(max) && max >= Number.MIN_SAFE_INTEGER && max <= Number.MAX_SAFE_INTEGER ? max : Number.MAX_SAFE_INTEGER;

  // Check if minimum or maximum is -0
  if (Object.is(minimum, -0)) minimum = 0;
  if (Object.is(maximum, -0)) maximum = 0;

  // Return the minimum and maximum values in correct order
  return minimum > maximum ? [maximum, minimum] : [minimum, maximum];
}

export { getNumberMinMax };
