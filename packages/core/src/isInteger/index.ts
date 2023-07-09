/**
 * Check if `input` is an integer.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an integer within the range of safe integers, `false` otherwise.
 * 
 * @example
 * ```ts
 * isInteger(0); // true
 * isInteger(1); // true
 * isInteger(-1); // true
 * isInteger(1.1); // false
 * isInteger(-1.1); // false
 * ```
 */
function isInteger(input: unknown): input is number {
  return typeof input === "number" && Number.isFinite(input) && Number.isInteger(input);
}

export { isInteger };
