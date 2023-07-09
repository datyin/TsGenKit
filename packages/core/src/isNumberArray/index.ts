import { isNumber } from "../isNumber";

/**
 * Checks if the given input is an array of numbers.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array of numbers, `false` otherwise.
 */
function isNumberArray(input: unknown): input is number[] {
  return Array.isArray(input) && input.every((item) => isNumber(item));
}

export { isNumberArray };
