import { isLink } from "../isLink";

/**
 * Check if the input is a valid array of link addresses.
 * @param input The value to check.
 * @returns `true` if `input` is a valid array of link addresses, `false` otherwise.
 * 
 * @example
 * ```
 * isLinkArray(["https://example.com", "http://example.com"]); // true
 * isLinkArray(["example"]); // false
 * ```
 */
function isLinkArray(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isLink);
}

export { isLinkArray };
