import { isEmail } from "../isEmail";

/**
 * Check if the input is an array and every element is a valid email.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array of valid emails, `false` otherwise.
 */
function isEmailArray(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isEmail);
}

export { isEmailArray };
