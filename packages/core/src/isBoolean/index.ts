/**
 * Checks if `input` is classified as a boolean.
 * @param input The value to check.
 * @returns `true` if `input` is classified as a boolean, `false` otherwise.
 * 
 * @example
 * ```ts
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean(0); // false
 * isBoolean(1); // false
 * isBoolean(""); // false
 * ```
 */
function isBoolean(input: unknown): input is boolean {
  return typeof input === "boolean" && (input === true || input === false);
}

export { isBoolean }
