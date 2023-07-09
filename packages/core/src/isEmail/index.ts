import { REGEX_EMAIL } from "../constRegexEmail";

/**
 * Check if the input is a valid email.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a valid email, `false` otherwise.
 * 
 * @category Email
 * 
 * @example
 * ```ts
 * import { isEmail } from "@datyin/core";
 *
 * isEmail("test@test.com"); // true
 * ```
 */
function isEmail(input: unknown): input is string {
  return typeof input === "string" && REGEX_EMAIL.test(input);
}

export { isEmail };
