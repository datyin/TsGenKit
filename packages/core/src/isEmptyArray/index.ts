/**
 * Check if the input is an array with no elements.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an empty array, `false` otherwise.
 * 
 * @example
 * ```ts
 * isEmptyArray([]); // true
 * isEmptyArray([1]); // false
 * isEmptyArray({ ID: 123 }); // false
 * ```
 */
function isEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length === 0;
}

export { isEmptyArray };
