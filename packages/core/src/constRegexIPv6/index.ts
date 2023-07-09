/**
 * Regular expression for IPv6 validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 *
 * @category IP
 *
 * @example
 * ```ts
 * import { REGEX_IPv6 } from "@datyin/core";
 *
 * REGEX_IPv6.test("2001:0db8:85a3:0000:0000:8a2e:0370:7334"); // true
 * ```
 */
export const REGEX_IPv6 = /* PURE */ /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
