/**
 * Get value if it is in the options array, otherwise return the fallback value.
 * 
 * @param options allowed values
 * @param input the value to check
 * @param fallback the value to return if the input is not in the options array
 * @returns the input value if it is in the options array, otherwise the fallback value
 * 
 * @example
 * ```typescript
 * getValueOf([1, 2, 3], 2, 1); // 2
 * getValueOf([1, 2, 3], 4, 2); // 2
 * ```
 */
function getValueOf<T>(options: T[], input: unknown, fallback: T): T {
  return Array.isArray(options) && options.includes(input as T) ? input as T : options.includes(fallback) ? fallback : options[0] as T;
}

export { getValueOf };
