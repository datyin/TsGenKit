/**
 * Regular expression for GUID validation.
 * 
 * @category GUID
 *
 * @example
 * ```ts
 * import { REGEX_GUID } from "@datyin/core";
 *
 * REGEX_GUID.test("e15d4f9d-d6df-47c6-8e70-ca803ce6c2b5"); // true
 * ```
 */
export const REGEX_GUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
