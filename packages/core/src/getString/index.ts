import { UserInput, isInteger } from "..";

interface GetStringOptions {
  /**
   * The default value to return if the input is not a valid string.
   */
  default: string;

  /**
   * The maximum length of the string to return.
   */
  max: number;
};

/**
 * Get string from input or fallback.
 *
 * @param input The value to get string from.
 * @param fallback The fallback value if the input is not string.
 * @returns The string from input or fallback.
 */
function getString(input: unknown, options: UserInput<GetStringOptions> = {}): string {
  const value = input instanceof String
    ? input.toString()
    : typeof input === "string"
      ? input
      : typeof options?.default === "string"
        ? options.default
        : ""
  ;

  if (isInteger(options?.max) && value.length > options.max) {
    return value.substring(0, options.max);
  }

  return value;
}

export { getString }
export type { GetStringOptions };
