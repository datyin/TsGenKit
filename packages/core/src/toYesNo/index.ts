import { type UserInput, getString } from "../index";

interface ToYesNoOptions {
  /**
   * Custom "Yes" string.
   */
  yes?: string;

  /**
   * Custom "No" string.
   */
  no?: string;
}

/**
 * Converts a boolean value to a "Yes" or "No" string.
 *
 * @param value The value to convert.
 * @param options Options for the function.
 * @returns Returns a "Yes" or "No" string.
 * 
 * @example
 * ```ts
 * import { toYesNo } from "@datyin/core";
 * 
 * toYesNo(true); // "Yes"
 * toYesNo(false); // "No"
 * toYesNo(1); // "Yes"
 * toYesNo(0); // "No"
 * toYesNo(true, { yes: "Yup" }); // "Yup"
 * toYesNo(false, { no: "Nope" }); // "Nope"
 * ```
 */
function toYesNo(value: boolean | 1 | 0, options: UserInput<ToYesNoOptions> = {}): string {
  if (value === true || value === 1) {
    return getString(options?.yes) || "Yes";
  }

  return getString(options?.no) || "No";
}

export { toYesNo };
export type { ToYesNoOptions };
