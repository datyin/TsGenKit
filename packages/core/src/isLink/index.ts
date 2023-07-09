/**
 * Check if the input is a valid link address.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a valid link address, `false` otherwise.
 * 
 * @example
 * ```
 * isLink("https://example.com"); // true
 * isLink("http://example.com"); // true
 * isLink("example"); // false
 * ```
 */
function isLink(input: unknown): input is string {
  if (typeof input !== "string") {
    return false;
  }

  try {
    new URL(input);
    return true;
  }
  catch {
    return false;
  }
}

export { isLink };
