/**
 * Regular expression for email validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 *
 * @category Email
 *
 * @example
 * ```ts
 * import { REGEX_EMAIL } from "@datyin/core";
 *
 * REGEX_EMAIL.test("test@test.com"); // true
 * ```
 */
export const REGEX_EMAIL = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
