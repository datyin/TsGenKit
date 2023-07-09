type Nullish<T> = T | null | undefined;

/**
 * Checks if the input is null or undefined.
 *
 * @param input The value to check.
 * @returns `true` if `input` is null or undefined, `false` otherwise.
 * 
 * @example
 * ```ts
 * isNullish(null); // true
 * isNullish(undefined); // true
 * isNullish(0); // false
 * isNullish(""); // false
 * isNullish(false); // false
 * ```
 */
function isNullish(input: unknown): input is null | undefined {
  return input === null || input === undefined;
}

export { isNullish };
export type { Nullish };
