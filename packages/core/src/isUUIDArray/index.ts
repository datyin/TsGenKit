import { isUUID } from "../isUUID";

/**
 * Check if the input is a valid UUID array.
 *
 * @param index The value to check.
 * @returns `true` if `index` is a valid UUID array, `false` otherwise.
 */
function isUUIDArray(index: unknown): index is readonly string[] {
  return Array.isArray(index) && index.every(isUUID);
}

export { isUUIDArray };
