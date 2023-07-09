import { isIPv4 } from '../isIPv4';

/**
 * Check if the input is an array of valid IPv4 addresses.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array of valid IPv4 addresses, `false` otherwise.
 */
function isIPv4Array(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isIPv4);
}

export { isIPv4Array };
