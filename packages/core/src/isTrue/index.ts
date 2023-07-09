/**
 * Checks if the input is `true`.
 * @param input The value to check.
 * @returns The assertion result.
 */
function isTrue(input: unknown): input is true {
  return input === true;
}

export { isTrue };
