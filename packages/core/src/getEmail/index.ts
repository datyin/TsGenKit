import { isEmail } from "../index";

interface GetEmailOptions {
  /**
   * The default value to return if the input is not a valid email address.
   */
  default?: `${string}@${string}.${string}` | "";
}

function getEmail(input: unknown, options: GetEmailOptions = {}): string {
  return isEmail(input) ? input : isEmail(options?.default) ? options.default : "";
}

export { getEmail };
export type { GetEmailOptions };
