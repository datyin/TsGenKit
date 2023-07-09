/**
 * Check if the input is a promise.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a promise, `false` otherwise.
 */
function isPromise<T = unknown>(input: unknown): input is Promise<T> {
  return input != null && typeof input === "object" && typeof (input as Promise<unknown>).then === "function";
}

export { isPromise }
