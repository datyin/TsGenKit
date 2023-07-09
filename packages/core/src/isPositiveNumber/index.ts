/**
 * Checks if the input is a positive number within the range of safe integers.
 * @param input
 * @returns 
 */
function isPositiveNumber(input: unknown): input is number {
  return typeof input === "number" && Number.isFinite(input) && input > 0 && input <= Number.MAX_SAFE_INTEGER;
}

export { isPositiveNumber };
