import { isDate } from "../isDate";

/**
 * Checks if `input` is valid `Date` object and is now or in future.
 * @param input The value to check.
 * @returns `true` if `input` is valid `Date` object and is now or in future, `false` otherwise.
 * 
 * @example
 * ```ts
 * isDateNowOrFuture(new Date("2080-01-01")); // true
 * isDateNowOrFuture(new Date()); // true
 * isDateNowOrFuture(new Date("invalid date")); // false
 * isDateNowOrFuture(new Date("2020-01-01")); // false
 * ```
 */
function isDateNowOrFuture(input: unknown): input is Date {
  return isDate(input) && input.getTime() >= Date.now();
}

export { isDateNowOrFuture };
