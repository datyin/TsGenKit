import { isInteger } from "../isInteger";

/**
 * Check if input is an integer array and every element is within the range of safe integers.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array of integers within the range of safe integers, `false` otherwise.
 * 
 * @example
 * ```ts
 * isIntegerArray([0, 1, -1]); // true
 * isIntegerArray([1, -1.1]); // false
 * ```
 */
function isIntegerArray(input: unknown): input is number[] {
  return Array.isArray(input) && input.every(isInteger);
}

export { isIntegerArray };
