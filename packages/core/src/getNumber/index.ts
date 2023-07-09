import { UserInput, getNumberMinMax } from "..";
import { isNumber } from "../isNumber";

interface GetNumberOptions {
  /**
   * The default value to return if the input is not a valid number.
   */
  default: number;

  /**
   * The minimum value to return.
   */
  min: number;

  /**
   * The maximum value to return.
   */
  max: number;
}

/**
 * Ensure that the input is a safe number.
 * 
 * @remarks
 * - The safe range is between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`.
 * - Any non-number value won't be converted to a number.
 *
 * @param input 
 * @param fallback 
 * @returns 
 */
function getNumber(input: unknown, options: UserInput<GetNumberOptions> = {}): number {
  const value = isNumber(input) ? input : isNumber(options?.default) ? options.default : 0;

  const [min, max] = getNumberMinMax(options?.min, options?.max);

  if (value < min) {
    return min;
  }
  else if (value > max) {
    return max;
  }

  return Object.is(value, -0) ? 0 : value;
}

export { getNumber };
export type { GetNumberOptions };
