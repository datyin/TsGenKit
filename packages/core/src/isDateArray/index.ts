import { isDate } from "../isDate";

/**
 * Check if input is an array and every element is a `Date`.
 *
 * @param input The value to check.
 * @returns `true` if `input` is valid `Date` array, `false` otherwise.
 * 
 * @example
 * ```ts
 * isDateArray([new Date(), new Date()]); // true
 * isDateArray([new Date(), new Date("invalid date")]); // false
 * ```
 */
function isDateArray(input: unknown): input is Date[] {
  return Array.isArray(input) && input.every(isDate);
}

export { isDateArray };
