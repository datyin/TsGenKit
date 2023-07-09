import { isInteger } from "../isInteger";

/**
 * Checks if the given input is a positive integer within the range of safe integers.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a positive integer, `false` otherwise.
 */
function isPositiveInteger(input: unknown): input is number {
  return isInteger(input) && input > 0 && input <= Number.MAX_SAFE_INTEGER;
}

export { isPositiveInteger };
