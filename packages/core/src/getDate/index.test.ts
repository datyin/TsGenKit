import { test, expect } from "vitest";
import { getDate } from "./index";

/**
 * @param item [`input`, `instance`]
 */
const cases: [unknown, unknown, unknown][] = [
  [new Date(), undefined, Date],
  [undefined, undefined, Date],
  [null, undefined, Date],
  [true, undefined, Date],
  [false, undefined, Date],
];

test.each(cases)("getDate(%s, %s) === %s", (input, fallback, instance) => {
  const response = getDate(input, fallback as any);

  expect(response).toBeInstanceOf(instance);
});
