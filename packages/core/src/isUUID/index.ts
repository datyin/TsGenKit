import { REGEX_UUID } from "../constRegexUUID";

/**
 * Check if the input is a valid UUID.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a valid UUID, `false` otherwise.
 */
function isUUID(input: unknown): input is string {
  return typeof input === "string" && REGEX_UUID.test(input);
}

export { isUUID }
