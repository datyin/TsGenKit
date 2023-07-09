import { test, expect } from "vitest";
import { type ToBooleanOptions, toBoolean } from "./index";
import type { UserInput } from "../typeUserInput";

/**
 * @param item [`input`, `options`, `expected`]
 */
const cases: [unknown, UserInput<ToBooleanOptions> | undefined, boolean][] = [
  [true, undefined, true],
  [false, undefined, false],
  [true, { default: false }, true],
  [false, { default: true }, false],
  ["true", undefined, true],
  ["yes", undefined, true],
  ["ja", undefined, true],
  ["1", undefined, true],
  [1, { default: false }, true],
  [2, { default: false }, false],
];

test.each(cases)("toBoolean(%s, %s) === %s", (input, options, expected) => {
  const response = toBoolean(input, options);

  expect(response).toEqual(expected);
});
