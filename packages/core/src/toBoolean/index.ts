import { isBoolean, isNumber, isString, type UserInput } from "..";

interface ToBooleanOptions {
  /**
   * The default value to return if the input is not a valid boolean.
   */
  default: boolean;

  /**
   * The custom values to be considered as true.
   * @default ["true", "yes", "ja", "1", 1]
   */
  trueValues: (string | number)[];
}

function toBoolean(input: unknown, options: UserInput<ToBooleanOptions> = {}) {
  if (isBoolean(input)) return input;

  const trueValues = options.trueValues ?? ["true", "yes", "ja", "1"];

  if (isString(input) || isNumber(input)) {
    if (trueValues.some((value) => `${value}`.toLowerCase() === `${input}`.toLowerCase())) {
      return true;
    }
  }

  return options?.default === true;
}

export { toBoolean };
export type { ToBooleanOptions };
