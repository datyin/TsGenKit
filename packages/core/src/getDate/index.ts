import { isDate } from "../isDate";

interface GetDateOptions {
  /**
   * The default value to return if the input is not a valid Date object.
   */
  default: Date;

  /**
   * The minimum value to return.
   */
  min: Date;

  /**
   * The maximum value to return.
   */
  max: Date;
};

/**
 * Ensure that the input is a valid Date object.
 *
 * @param input The value to check if it is a Date object.
 * @returns Input if it is a Date object, otherwise a new Date object.
 *
 * @category Date
 *
 * @example
 * ```ts
 * import { getDate } from "@datyin/core";
 *
 * // Basic usage
 * getDate("test"); // new Date();
 *
 * // With fallback
 * getDate("test", new Date("2023-01-01")); // new Date("2023-01-01");
 *
 * // With valid input
 * getDate(new Date("2020-01-01")); // new Date("2020-01-01");
 * ```
 */
function getDate(input: unknown, options: Partial<GetDateOptions> = {}): Date {
  const value = isDate(input) ? input : isDate(options?.default) ? options!.default : new Date();

  if (options.min != null && isDate(options.min) && value.getTime() < options.min.getTime()) {
    return options.min;
  }
  else if (options.max != null && isDate(options.max) && value.getTime() > options.max.getTime()) {
    return options.max;
  }

  return value;
}

export { getDate };
export type { GetDateOptions };
