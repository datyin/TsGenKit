import { isNumber } from "../isNumber";
import { getNumber } from "../getNumber";
import { getNumberMinMax } from "../getNumberMinMax";
import { getNumeric } from "../getNumeric";
import type { UserInput } from "../typeUserInput";

interface ToNumberOptions {
  default: number;
  min: number;
  max: number;
}

/**
 * Converts the input to a number.
 * 
 * @param input The value to convert to a number.
 * @param options The options to use.
 * @returns The number or the default value.
 */
function toNumber(input: unknown, options: UserInput<ToNumberOptions> = {}): number {
  const [min, max] = getNumberMinMax(options?.min, options?.max);
  const numeric = getNumeric(input);
  const value = Number.parseFloat(numeric);

  if (isNumber(value)) {
    return getNumber(value, { min, max });
  }

  return getNumber(options?.default, { min, max });
}

export { toNumber };
export type { ToNumberOptions };
