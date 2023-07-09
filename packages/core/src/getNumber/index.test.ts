import { test, expect } from "vitest";
import { getNumber } from "./index";
import type { GetNumberOptions } from "./index";
import type { UserInput } from "../typeUserInput";

/**
 * [input, options, expected]
 */
const cases: [unknown, UserInput<GetNumberOptions> | undefined, number][] = [
  [undefined, undefined, 0],
  [null, undefined, 0],
  [true, undefined, 0],
  [false, undefined, 0],
  [0, undefined, 0],
  [1, undefined, 1],
  [NaN, undefined, 0],
  ["", undefined, 0],
  ["test", undefined, 0],
  ["$ 123", undefined, 0],
  ["$ 123", { default: 456 }, 456],
  ["$ 123", { min: 100 }, 100],
  ["$ 123", { default: 456, min: 200 }, 456],
  ["$ 123", { default: 456, min: 100, max: 200 }, 200],
  [123, { default: 456, min: 100, max: 200 }, 123],
];

test.each(cases)("getNumber(%s, %s) => %s", (input, options, expected) => {
  const response = getNumber(input, options);

  expect(response).toBe(expected);
});
