/**
 * Checks if the input is classified as a `Set` object.
 * @param input the value to check
 * @returns `true` if `input` is a `Set` object, `false` otherwise.
 * 
 * @example
 * ```ts
 * isSet(new Set()); // true
 * isSet(new Map()); // false
 * ```
 */
function isSet<V = unknown>(input: unknown): input is Set<V> {
  return input != null && input instanceof Set && "size" in input && typeof input.size === "number";
}

export { isSet };
