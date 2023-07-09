import { isBoolean, type UserInput } from "..";

interface GetBooleanOptions {
  /**
   * The default value to return if the input is not a valid boolean.
   */
  default: boolean;
}

function getBoolean(input: unknown, options: UserInput<GetBooleanOptions> = {}) {
  return isBoolean(input) ? input : options?.default === true;
}

export { getBoolean };
export type { GetBooleanOptions };
