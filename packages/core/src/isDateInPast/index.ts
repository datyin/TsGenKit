import { isDate } from "../isDate";

/**
 * Checks if `input` is valid `Date` object and is in past.
 * @param input The value to check.
 * @returns `true` if `input` is valid `Date` object and is in past, `false` otherwise.
 * 
 * @example
 * ```ts
 * isDateInPast(new Date("2020-01-01")); // true
 * isDateInPast(new Date()); // false
 * isDateInPast(new Date("invalid date")); // false
 * isDateInPast(new Date("2080-01-01")); // false
 * ```
 */
function isDateInPast(input: unknown): input is Date {
  return isDate(input) && input.getTime() < Date.now();
}

export { isDateInPast };
