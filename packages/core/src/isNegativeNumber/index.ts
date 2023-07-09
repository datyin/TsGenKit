import { isNumber } from "../isNumber";

/**
 * Checks if the input is a negative number.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a negative number, `false` otherwise.
 * 
 * @example
 * ```ts
 * isNegativeNumber(-1); // true
 * isNegativeNumber(0); // false
 * isNegativeNumber(1); // false
 * isNegativeNumber(-1.1); // true
 * ```
 */
function isNegativeNumber(input: unknown): input is number {
  return isNumber(input) && input < 0 && input >= Number.MIN_SAFE_INTEGER;
}

export { isNegativeNumber };
