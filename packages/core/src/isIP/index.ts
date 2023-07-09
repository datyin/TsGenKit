import { REGEX_IPv4 } from "../constRegexIPv4";
import { REGEX_IPv6 } from "../constRegexIPv6";

/**
 * Check if the input is a valid IPv4 or IPv6 address.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a valid IPv4 or IPv6 address, `false` otherwise.
 */
function isIP(input: unknown): input is string {
  return typeof input === "string" && (REGEX_IPv4.test(input) || REGEX_IPv6.test(input));
}

export { isIP };
