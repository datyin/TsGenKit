import { REGEX_IPv4 } from "../constRegexIPv4";

/**
 * Check if the input is a valid IPv4 address.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a valid IPv4 address, `false` otherwise.
 */
function isIPv4(input: unknown): input is string {
  return typeof input === "string" && REGEX_IPv4.test(input);
}

export { isIPv4 }
