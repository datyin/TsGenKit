import { test, expect } from "vitest";
import { getNumeric } from "./index";

/**
 * [input, expected]
 */
const cases: [unknown, string][] = [
  [undefined, ""],
  [null, ""],
  [true, "1"],
  [false, "0"],
  [0, "0"],
  [1, "1"],
  [NaN, ""],
  ["", ""],
  ["test", ""],
  ["$ 123", "123"],
  ["$ 123,456", "123456"],
  ["$ 123,456.123", "123456.123"],
  ["$ 123.123,456", "123123.456"],
  ["$ 123.123", "123.123"],
  ["20%", "20"],
  ["20.5%", "20.5"],
  ["20.5% 30%", "20.5"],
];

test.each(cases)("getNumeric(%s) => %s", (input, expected) => {
  const response = getNumeric(input);

  expect(response).toBe(expected);
});
