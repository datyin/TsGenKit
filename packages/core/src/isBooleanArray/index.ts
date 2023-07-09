import { isBoolean } from "../isBoolean";

/**
 * Check if input is an array and every element is a boolean.
 *
 * @param input The value to check.
 * @returns `true` if `input` is classified as a boolean array, `false` otherwise.
 * 
 * @example
 * ```ts
 * isBooleanArray([true, false]); // true
 * isBooleanArray([true, 0]); // false
 * ```
 */
function isBooleanArray(input: unknown): input is boolean[] {
  return Array.isArray(input) && input.every(isBoolean);
}

export { isBooleanArray };
