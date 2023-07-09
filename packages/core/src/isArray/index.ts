/**
 * Check if the input is an array.
 *
 * @param input The value to check.
 * @returns `true` if the input is an array, `false` otherwise.
 * @category Array
 * 
 * @example
 * ```ts
 * isArray([]); // true
 * isArray([1, 2, 3]); // true
 * isArray({}); // false
 * isArray(new Set()); // false
 * isArray(new Map()); // false
 * isArray(""); // false
 * isArray("abc"); // false
 * isArray(123); // false
 * isArray(0); // false
 * isArray(true); // false
 * isArray(false); // false
 * isArray(null); // false
 * isArray(undefined); // false
 * isArray(Symbol()); // false
 * isArray(() => {}); // false
 * ```
 */
function isArray<T>(input: T) {
  return Array.isArray(input) as T extends readonly unknown[] ? T : false;
}

export { isArray };
