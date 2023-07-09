import { isDate } from "../isDate";

interface ToStringOptions {
  /**
   * Default string if input is impossible to convert.
   */
  default: string;

  /**
   * Set the date format.
   */
  customDate: string;

  /**
   * Set custom strings for boolean values.
   * 
   * @example
   * ```ts
   * toString(true, { customBoolean: { true: "Yes", false: "No" } }); => "Yes"
   * ```
   */
  customBoolean: { true: string; false: string;};

  /**
   * Set thousands separator for numbers. (Default: none)
   */
  numberThousandsSeparator: string;

  /**
   * Set decimal separator for numbers. (Default: ".")
   */
  numberDecimalSeparator: string;

  /**
   * Set number of decimal places for numbers. (Default: automatically determined)
   */
  numberDecimalPlaces: number;
}

function toString(input: unknown, options: Partial<ToStringOptions> = {}): string {
  if (typeof input === "string") {
    return input;
  }

  if (isDate(input)) {
    return input.toISOString();
  }

  if (typeof input === "boolean") {
    if (options?.customBoolean) {
      return input ? options.customBoolean.true : options.customBoolean.false;
    }
    else {
      return input.toString();
    }
  }

  return typeof options?.default === "string" ? options.default : "";
}

export { toString };
export type { ToStringOptions };
