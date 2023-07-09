import { type UserInput, isMap } from "../index";

interface GetMapOptions<K, V> {
  /**
   * Default value if input is impossible to convert.
   */
  default?: Map<K, V>;
}

/**
 * Ensures the input is a Map.
 * @param input The value to check if it is a Map.
 * @param options The options to use.
 * @returns The Map or the default value.
 */
function getMap<K, V>(input: unknown, options: UserInput<GetMapOptions<K, V>> = {}): Map<K, V> {
  return isMap<K, V>(input) ? input : isMap<K, V>(options?.default) ? options.default : new Map<K, V>();
}

export { getMap };
export type { GetMapOptions };
