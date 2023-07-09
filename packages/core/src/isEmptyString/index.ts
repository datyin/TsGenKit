/**
 * Checks if the input is an string and is empty.
 * @param input The value to check.
 * @returns `true` if `input` is an string and is empty, `false` otherwise.
 * 
 * @example
 * ```ts
 * isEmptyString(""); // true
 * isEmptyString("    "); // true
 * isEmptyString("test"); // false
 * ```
 */
function isEmptyString(input: unknown): input is string {
  return typeof input === "string" && input.trim().length === 0;
}

export { isEmptyString };
