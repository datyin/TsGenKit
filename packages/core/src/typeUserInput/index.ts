/**
 * Makes all properties optional and nullish recursively.
 * 
 * @example
 * ```ts
 * import type { UserInput } from "@datyin/core";
 * 
 * interface User {
 *  name: string;
 *  age: number;
 * }
 * 
 * const userInput: UserInput<User> = {
 *  name: "John",
 * };
 */
type UserInput<T> = keyof T extends never ? T | null | undefined : { readonly [K in keyof T]?: UserInput<T[K]> };

export { UserInput };
