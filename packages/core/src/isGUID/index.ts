import { REGEX_GUID } from "../constRegexGUID";

/**
 * Check if the input is a valid GUID.
 * @param input The value to check.
 * @returns `true` if `input` is a valid GUID, `false` otherwise.
 * 
 * @example
 * ```ts
 * isGUID("00000000-0000-0000-0000-000000000000"); // true
 * ```
 */
function isGUID(input: unknown): input is string {
  return typeof input === "string" && input.length === 36 && REGEX_GUID.test(input);
}

export { isGUID };
