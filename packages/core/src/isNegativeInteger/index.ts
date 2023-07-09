import { isInteger } from "../isInteger";

/**
 * Checks if the given value is a negative integer within the range of safe integers.
 * 
 * @param input The value to check.
 * @returns `true` if `input` is a negative integer within the range of safe integers, `false` otherwise.
 * 
 * @example
 * ```ts
 * isNegativeInteger(-1); // true
 * isNegativeInteger(0); // false
 * isNegativeInteger(1); // false
 * isNegativeInteger(-1.1); // false
 * ```
 */
function isNegativeInteger(input: unknown): input is number {
  return isInteger(input) && input < 0 && input >= Number.MIN_SAFE_INTEGER;
}

export { isNegativeInteger };
