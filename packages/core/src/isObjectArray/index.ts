import { isObject } from "../isObject";

/**
 * Check if the input is an array of plain objects.
 *
 * @param value The value to check.
 * @returns `true` if `value` is an array of plain objects, `false` otherwise.
 */
function isObjectArray<T = Record<string, any>>(value: unknown): value is T[] {
  return Array.isArray(value) && value.every(isObject);
}

export { isObjectArray };
