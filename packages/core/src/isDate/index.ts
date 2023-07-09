/**
 * Checks if `input` is valid `Date` object.
 * @param input The value to check.
 * @returns `true` if `input` is valid `Date` object, `false` otherwise.
 * 
 * @example
 * ```ts
 * isDate(new Date()); // true
 * isDate(new Date("invalid date")); // false
 * ```
 */
function isDate(input: unknown): input is Date {
  return input instanceof Date && !Number.isNaN(input.getTime());
}

export { isDate };
