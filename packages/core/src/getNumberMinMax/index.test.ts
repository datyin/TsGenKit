import { test, expect } from "vitest";
import { getNumberMinMax } from "./index";

/**
 * @param item [`min`, `max`, [`min`, `max`]]
 */
const cases: [unknown, unknown, [number, number]][] = [
  [undefined, undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [null, null, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [true, undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [false, undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  ["", undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  ["1", undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  ["1.1", undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [1, undefined, [1, Number.MAX_SAFE_INTEGER]],
  [1.1, undefined, [1.1, Number.MAX_SAFE_INTEGER]],
  [0, undefined, [0, Number.MAX_SAFE_INTEGER]],
  [-1, undefined, [-1, Number.MAX_SAFE_INTEGER]],
  [Number.MAX_SAFE_INTEGER, undefined, [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [Number.MIN_SAFE_INTEGER, undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [Number.MAX_SAFE_INTEGER + 1, undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [Number.MIN_SAFE_INTEGER - 1, undefined, [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  [5, 1, [1, 5]],
];

test.each(cases)("getNumberMinMax(%s, %s) === %s", (min, max, expected) => {
  const response = getNumberMinMax(min, max);

  expect(response).toEqual(expected);
});
