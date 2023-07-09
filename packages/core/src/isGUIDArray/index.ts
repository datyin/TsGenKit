import { isGUID } from '../isGUID';

/**
 * Check if the input is an array of valid GUIDs.
 * @param input The value to check.
 * @returns `true` if `input` is an array of valid GUIDs, `false` otherwise.
 * 
 * @example
 * ```ts
 * isGUIDArray(["00000000-0000-0000-0000-000000000000"]); // true
 * ```
 */
function isGUIDArray(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isGUID);
}

export { isGUIDArray };
