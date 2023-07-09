import { isIPv6 } from "../isIPv6";

/**
 * Check if the input is an array of valid IPv6 addresses.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array of valid IPv6 addresses, `false` otherwise.
 */
function isIPv6Array(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isIPv6);
}

export { isIPv6Array };
