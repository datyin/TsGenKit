import { test, expect } from "vitest";
import { diff } from "./index";

const cases: [unknown, unknown, unknown][] = [
  [{ a: 1 }, { a: 1 }, []],
  [{ a: 1 }, { a: 2 }, [{ path: "a", from: 1, into: 2 }]],
  [{ a: 1 }, { b: 1 }, [{ path: "a", from: 1, into: undefined }, { path: "b", from: undefined, into: 1 }]],
]

test.each(cases)("diff(%s, %s) should return %s", (from, into, expected) => {
  const actual = diff(from, into);

  expect(actual).toEqual(expected);
});
