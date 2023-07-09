/**
 * Check if the input is a URL object.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a URL object, `false` otherwise.
 * 
 * @example
 * ```ts
 * isURL(new URL("https://example.com")); // true
 * isURL("https://example.com"); // false
 * ```
 */
function isURL(input: unknown): input is URL {
  return input != null && typeof input === "object" && input instanceof URL;
}

export { isURL }
