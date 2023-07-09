import { getNumberMinMax } from "../getNumberMinMax";
import { isInteger } from "../isInteger";
import type { UserInput } from "../typeUserInput";

interface GetIntegerOptions {
  /**
   * The default value to return if the input is not an integer.
   * @default 0
   */
  default: number;

  /**
   * The minimal allowed value.
   * @default Number.MIN_SAFE_INTEGER
   */
  min: number;

  /**
   * The maximal allowed value.
   * @default Number.MAX_SAFE_INTEGER
   */
  max: number;
};

function getInteger(input: unknown, options: UserInput<GetIntegerOptions> = {}): number {
  const value = isInteger(input) ? input : isInteger(options?.default) ? options.default : 0;

  const [min, max] = getNumberMinMax(
    isInteger(options?.min) ? options.min : Number.MIN_SAFE_INTEGER,
    isInteger(options?.max) ? options.max : Number.MAX_SAFE_INTEGER
  );

  if (value < min) {
    return min;
  }
  else if (value > max) {
    return max;
  }

  return Object.is(value, -0) ? 0 : value;
}

export { getInteger };
export type { GetIntegerOptions };
