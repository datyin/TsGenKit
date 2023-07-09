import { isURL } from "../isURL";

/**
 * Check if the input is an array of URL objects.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array of URL objects, `false` otherwise.
 * 
 * @example
 * ```ts
 * isURLArray([new URL("https://example.com")]); // true
 * isURLArray(["https://example.com"]); // false
 * ```
 */
function isURLArray(input: unknown): input is URL[] {
  return Array.isArray(input) && input.every(isURL);
}

export { isURLArray };
