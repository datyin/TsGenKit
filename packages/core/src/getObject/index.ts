import { isObject } from "..";

interface GetObjectOptions<T = Record<string, any>> {
  default?: T;
}

function getObject<T = Record<string, any>>(input: unknown, options: GetObjectOptions<T> = {}): T {
  const value = isObject<T>(input) ? input : isObject<T>(options.default) ? options.default : {} as T;

  // TODO: Add zod validation

  return value;
}

export { getObject };
export type { GetObjectOptions };
