import { isString } from "../isString";

/**
 * Checks if the input is string array.
 *
 * @param input The value to check.
 * @returns `true` if `input` is string array, `false` otherwise.
 */
function isStringArray(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isString);
}

export { isStringArray };
