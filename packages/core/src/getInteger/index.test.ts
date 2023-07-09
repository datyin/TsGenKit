import { test, expect } from "vitest";
import { getInteger } from "./index";
import type { GetIntegerOptions } from "./index";
import type { UserInput } from "../typeUserInput";

/**
 * @param item [`input`, `fallback`, `expected`]
 */
const cases: [unknown, UserInput<GetIntegerOptions> | undefined, number][] = [
  [undefined, undefined, 0],
  [null, { default: 5 }, 5],
  [10, { default: 5, max: 5 }, 5],
  [true, undefined, 0],
  [false, undefined, 0],
  ["", undefined, 0],
  ["test", undefined, 0],
  ["1", undefined, 0],
  ["1.1", undefined, 0],
  [1, undefined, 1],
  [1.1, undefined, 0],
  [0, undefined, 0],
  [-1, undefined, -1],
  [Number.MAX_SAFE_INTEGER, undefined, Number.MAX_SAFE_INTEGER],
  [Number.MIN_SAFE_INTEGER, undefined, Number.MIN_SAFE_INTEGER],
  [Number.MAX_SAFE_INTEGER + 1, undefined, Number.MAX_SAFE_INTEGER],
  [Number.MIN_SAFE_INTEGER - 1, undefined, Number.MIN_SAFE_INTEGER],
];

test.each(cases)("getInteger(%s, %s) === %s", (input, fallback, expected) => {
  const response = getInteger(input, fallback as any);

  expect(response).toEqual(expected);
});
