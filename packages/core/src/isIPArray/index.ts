import { isIP } from '../isIP';

/**
 * Check if the input is a valid IPv4 or IPv6 address.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a valid IPv4 or IPv6 address, `false` otherwise.
 */
function isIPArray(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isIP);
}

export { isIPArray };
