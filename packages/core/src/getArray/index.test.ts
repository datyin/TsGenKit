import { test, expect } from "vitest";
import { GetArrayOptions, getArray } from "./index";
import { UserInput } from "../typeUserInput";

/**
 * @param item [`input`, `options`, `expected`]
 */
const cases: [unknown, UserInput<GetArrayOptions<unknown>> | undefined, unknown[]][] = [
  [[1], undefined, [1]],
  [undefined, undefined, []],
  [null, { default: [1, 2, 3]}, [1, 2, 3]],
  [true, undefined, []],
  [false, undefined, []],
  [0, undefined, []],
  [1, undefined, []],
  ["", undefined, []],
  ["test", undefined, []],
  [{ "one": 1 }, undefined, []],
  [() => {}, undefined, []],
  [Symbol(), undefined, []],
  [new Date(), undefined, []],
];

test.each(cases)("getArray(%s, %s) === %s", (input, options, expected) => {
  const response = getArray(input, options);

  expect(response).toEqual(expected);
});
