import { isDate } from "../isDate";

/**
 * Checks if input is valid `Date` object and is in future.
 *
 * @param input The value to check.
 * @returns `true` if `input` is valid `Date` object and is in future, `false` otherwise.
 * 
 * @example
 * ```ts
 * isDateInFuture(new Date("2080-01-01")); // true
 * isDateInFuture(new Date()); // false
 * isDateInFuture(new Date("invalid date")); // false
 * isDateInFuture(new Date("2020-01-01")); // false
 * ```
 */
function isDateInFuture(input: unknown): input is Date {
  return isDate(input) && input.getTime() > Date.now();
}

export { isDateInFuture };
