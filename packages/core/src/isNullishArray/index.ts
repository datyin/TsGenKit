import { isNullish } from "../isNullish";

/**
 * Check if input is an array and every element is null or undefined.
 * 
 * @param input The value to check.
 * @returns `true` if `input` is an array of null or undefined, `false` otherwise.
 */
function isNullishArray(input: unknown): input is (null | undefined)[] {
  return Array.isArray(input) && input.every(isNullish);
}

export { isNullishArray };
