import { test, expect } from "vitest";
import { type GetBooleanOptions, getBoolean } from "./index";
import type { UserInput } from "../typeUserInput";

/**
 * @param item [`input`, `options`, `expected`]
 */
const cases: [unknown, UserInput<GetBooleanOptions> | undefined, boolean][] = [
  [true, undefined, true],
  [false, undefined, false],
  [true, { default: false }, true],
  [false, { default: true }, false],
  ["true", undefined, false],
  ["true", { default: true }, true],
  ["yes", undefined, false],
  ["ja", undefined, false],
  [1, undefined, false],
];

test.each(cases)("getBoolean(%s, %s) === %s", (input, options, expected) => {
  const response = getBoolean(input, options);

  expect(response).toEqual(expected);
});
