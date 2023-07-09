/**
 * Checks if the input is a `Map` object.
 * @param input the value to check
 * @returns `true` if `input` is a `Map` object, `false` otherwise.
 * 
 * @example
 * ```ts
 * isMap(new Map()); // true
 * isMap(new Set()); // false
 * ```
 */
function isMap<K = unknown, V = unknown>(input: unknown): input is Map<K, V> {
  return input != null && input instanceof Map && "size" in input && typeof input.size === "number";
}

export { isMap }
