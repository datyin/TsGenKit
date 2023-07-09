import { getNumberMinMax } from "..";

/**
 * Get random number between min and max.
 *
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns The random number between min and max.
 */
function getRandomNumber(min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER): number {
  const [minimal, maximal] = getNumberMinMax(min, max);
  return Math.floor(Math.random() * (maximal - minimal + 1) + minimal);
}

export { getRandomNumber };
