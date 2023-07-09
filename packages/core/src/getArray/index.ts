import type { UserInput } from "../typeUserInput";

interface GetArrayOptions<T> {
  /**
   * The default value to return if the input is not an array.
   * @default []
   */
  default: T[];
};

/**
 * Ensure that the input is an array.
 *
 * @param input The value to convert to an array.
 * @returns The array or an empty array.
 * 
 * Supports:
 * @see https://caniuse.com/mdn-javascript_builtins_array_isarray
 *
 * @example
 * ```ts
 * import { getArray } from "@datyin/core";
 *
 * // Basic usage
 * getArray("test"); // []
 * 
 * // With fallback
 * getArray("test", { default: [1, 2, 3] }); // [1, 2, 3]
 *
 * // With valid input
 * getArray(["test"]); // ["test"]
 * ```
 */
function getArray<I, F>(input: I, options: UserInput<GetArrayOptions<F>> = {}): I extends readonly any[] ? I : F[] {
  return Array.isArray(input) ? input : Array.isArray(options?.default) ? options.default : [] as any;
}

export { getArray };
export type { GetArrayOptions };
