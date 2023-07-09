import { isNumber } from "../isNumber";

/**
 * Check if a number is between a minimum and maximum value.
 * @param input The value to check.
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns `true` if the value is a number between the minimum and maximum value, `false` otherwise.
 * 
 * @example
 * ```ts
 * isNumberBetween(1, 0, 2); // => true
 * ```
 */
function isNumberBetween(input: unknown, min: number, max: number): boolean {
  return isNumber(input) && input >= min && input <= max;
}

export { isNumberBetween };
