import { isPromise } from "../isPromise";

/**
 * Check if the input is an array of promises.
 * @param input The value to check.
 * @returns `true` if `input` is an array of promises, `false` otherwise.
 */
function isPromiseArray<T = unknown>(input: unknown): input is Promise<T>[] {
  return Array.isArray(input) && input.every(isPromise);
}

export { isPromiseArray };
