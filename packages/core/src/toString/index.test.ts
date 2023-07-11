import { test, expect } from "vitest";
import { ToStringOptions, toString } from "./index";

const cases: [unknown, string, Partial<ToStringOptions> | undefined][] = [
  [undefined, "", undefined],
  [null, "", undefined],
  [true, "true", undefined],
  [false, "false", undefined],
  [0, "0", undefined],
  [1, "1", undefined],
  [1.1, "1.1", undefined],
  ["", "", undefined],
  ["test", "test", undefined],
  [new Date("2021-01-01T00:00:00.000Z"), "2021-01-01T00:00:00.000Z", undefined],
  [new Date("2021-01-01T00:00:00.000Z"), "2021-01-01T00:00:00.000Z", { default: "default" }],
];

test.each(cases)("toString(%s, %s) should return %s", (input, expected, options) => {
  const actual = toString(input, options);

  expect(actual).toEqual(expected);
});
