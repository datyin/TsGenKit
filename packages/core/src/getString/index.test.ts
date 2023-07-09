import { test, expect } from "vitest";
import { getString } from "./index";
import type { GetStringOptions } from "./index";
import type { UserInput } from "../typeUserInput";

/**
 * [input, options, expected]
 */
const cases: [unknown, UserInput<GetStringOptions> | undefined, string][] = [
  [undefined, undefined, ""],
  [null, undefined, ""],
  [true, undefined, ""],
  [false, undefined, ""],
  [0, undefined, ""],
  [1, undefined, ""],
  [NaN, undefined, ""],
  ["", undefined, ""],
  ["test", undefined, "test"],
  ["test", { default: "default" }, "test"],
  ["test", { default: "default", max: 3 }, "tes"],
  ["test", { default: "default", max: 4 }, "test"],
  ["test", { default: "default", max: 5 }, "test"],
  [undefined, { default: "default" }, "default"],
];

test.each(cases)("getString(%s, %s) => %s", (input, options, expected) => {
  const response = getString(input, options);

  expect(response).toBe(expected);
});
