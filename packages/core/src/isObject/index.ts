/**
 * Check if the input is an plain object.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an object, `false` otherwise.
 * 
 * @example
 * ```ts
 * isObject({ ID: 123 }); // true
 * isObject([1, 2, 3]); // false
 * isObject(null); // false
 * ```
 */
function isObject<T = Record<string, any>>(input: unknown): input is T {
  return (
    input != null &&
    typeof input === "object" &&
    !Array.isArray(input) &&
    input.constructor === Object &&
    Object.prototype.toString.call(input) === '[object Object]'
  );
}

export { isObject };
