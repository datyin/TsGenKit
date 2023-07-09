import { isDate } from "../isDate";

/**
 * Checks if the input is valid `Date` object and is now or in past.
 *
 * @param input The value to check.
 * @returns `true` if `input` is valid `Date` object and is now or in past, `false` otherwise.
 * 
 * @example
 * ```ts
 * isDateNowOrPast(new Date("2020-01-01")); // true
 * isDateNowOrPast(new Date()); // true
 * isDateNowOrPast(new Date("invalid date")); // false
 * isDateNowOrPast(new Date("2080-01-01")); // false
 * ```
 */
function isDateNowOrPast(input: unknown): input is Date {
  return isDate(input) && input.getTime() <= Date.now();
}

export { isDateNowOrPast };
