/**
 * Regular expression for IPv4 validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 *
 * @category IP
 *
 * @example
 * ```ts
 * import { REGEX_IPv4 } from "@datyin/core";
 *
 * REGEX_IPv4.test("19.117.63.126"); // true
 * ```
 */
export const REGEX_IPv4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
