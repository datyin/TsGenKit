/**
 * Check if `input` is a finite number within the range of safe integers.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a number within the range of safe integers, `false` otherwise.
 */
function isNumber(input: unknown): input is number {
  return typeof input === "number" && Number.isFinite(input);
}

export { isNumber }
