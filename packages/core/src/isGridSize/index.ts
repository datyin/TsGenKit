import { isInteger } from "../index";

/**
 * Size of a grid column.
 * Number between 1 and 24.
 */
type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

/**
 * Check if the input is a valid grid size.
 *
 * Grid size is a number between 1 and 24. (Supported by Ant Design & Naive UI aswell)
 * 
 * @param input The value to check.
 * @returns `true` if `input` is a valid grid size, `false` otherwise.
 * 
 * @example
 * ```ts
 * isGridSize(1); // true
 * isGridSize(0); // false
 * isGridSize(25); // false
 * ```
 */
function isGridSize(input: unknown): input is GridSize {
  return isInteger(input) && input >= 1 && input <= 12;
}

export { isGridSize };
export type { GridSize };
