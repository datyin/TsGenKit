/**
 * Checks if the input is string.
 * @param input The value to check.
 * @returns `true` if `input` is string, `false` otherwise.
 * 
 * @example
 * ```ts
 * isString("hello"); // true
 * isString(1); // false
 * isString(true); // false
 * isString({}); // false
 * isString([]); // false
 * isString(new String("test")); // false
 * ```
 */
function isString(input: unknown): input is string {
  return typeof input === "string";
}

export { isString };
