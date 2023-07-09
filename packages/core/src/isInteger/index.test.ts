import { test, expect } from "vitest";
import { isInteger } from "./index";

const cases: [unknown, boolean][] = [
  [0, true],
  [1, true],
  [-1, true],
  [1.1, false],
  [-1.1, false],
  [Number.MAX_SAFE_INTEGER, true],
  [Number.MIN_SAFE_INTEGER, true],
  [Number.MAX_SAFE_INTEGER + 1, true],
  [Number.MIN_SAFE_INTEGER - 1, true],
  [Number.MAX_VALUE, true],
  [Number.MIN_VALUE, false],
  [Number.POSITIVE_INFINITY, false],
  [Number.NEGATIVE_INFINITY, false],
  [NaN, false],
  ["0", false],
  ["1", false],
  ["-1", false],
  ["1.1", false],
  ["-1.1", false],
  ["9007199254740991", false],
  ["-9007199254740991", false],
  [[1], false],
  [[1, 2], false],
  [{}, false],
  [{ a: 1 }, false],
  [true, false],
  [false, false],
  [null, false],
  [undefined, false],
  [Symbol(), false],
  [BigInt(1), false],
  [1n, false],
  [() => 1, false],
  [new Date(), false],
  [new Promise(() => {}), false],
];

test.each(cases)("isInteger(%s) === %s", (input, expected) => {
  const response = isInteger(input);

  expect(response).toBe(expected);
});
