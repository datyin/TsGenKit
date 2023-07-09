import { test, expect } from "vitest";
import { toNumber } from "./index";
import type { ToNumberOptions } from "./index";
import type { UserInput } from "../typeUserInput";

/**
 * [input, options, expected]
 */
const cases: [unknown, UserInput<ToNumberOptions> | undefined, number][] = [
  [undefined, undefined, 0],
  [null, undefined, 0],
  [true, undefined, 1],
  [false, undefined, 0],
  [0, undefined, 0],
  [1, undefined, 1],
  [NaN, undefined, 0],
  ["", undefined, 0],
  ["test", undefined, 0],
  ["$ 123", undefined, 123],
  ["$ 123", { default: 456 }, 123],
  ["$ 123", { min: 100 }, 123],
  ["$ 123", { default: 456, min: 200 }, 200],
  ["$ 123", { default: 456, min: 100, max: 200 }, 123],
  ["$123,456", undefined, 123456],
  ["$123,456.50", undefined, 123456.50],
  ["$123.456,50", undefined, 123456.50],
  ["20%", undefined, 20],
  ["20.5%", undefined, 20.5],
  ["20px", undefined, 20],
  [123, { default: 456, min: 100, max: 200 }, 123],
  [1e3, undefined, 1000],
  [Number.MAX_SAFE_INTEGER, undefined, Number.MAX_SAFE_INTEGER],
  [Number.MAX_SAFE_INTEGER + 1, undefined, Number.MAX_SAFE_INTEGER],
];

test.each(cases)("toNumber(%s, %s) => %s", (input, options, expected) => {
  const response = toNumber(input, options);

  expect(response).toBe(expected);
});
