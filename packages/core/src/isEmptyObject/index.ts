import { isObject } from "../isObject";

/**
 * Checks if input is an plain object and is empty.
 * 
 * @param input The value to check.
 * @returns `true` if `input` is an plain object and is empty, `false` otherwise.
 * 
 * @example
 * ```ts
 * isEmptyObject({}); // true
 * isEmptyObject({ test: "test" }); // false
 * isEmptyObject([]); // false
 * isEmptyObject(""); // false
 * isEmptyObject(0); // false
 * isEmptyObject(null); // false
 * ```
 */
function isEmptyObject<T = Record<string, any>>(input: unknown): input is T {
  return isObject(input) && Object.keys(input).length === 0;
}

export { isEmptyObject };
