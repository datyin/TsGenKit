/**
 * Regular expression for UUID validation.
 * 
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 *
 * @category UUID
 * @example
 * ```ts
 * import { REGEX_UUID } from "@datyin/core";
 * 
 * REGEX_UUID.test("e15d4f9d-d6df-47c6-8e70-ca803ce6c2b5"); // true
 * ```
 */
export const REGEX_UUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
