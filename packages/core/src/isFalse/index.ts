/**
 * Checks if the input is `false`.
 * @param input The value to check.
 * @returns `true` if the input is `false`, otherwise `false`.
 */
function isFalse(input: unknown): input is false {
  return input === false;
}

export { isFalse };
