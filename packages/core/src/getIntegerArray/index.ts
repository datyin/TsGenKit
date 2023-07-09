import { isInteger } from "../index";

function getIntegerArray(input: unknown): number[] {
  if (Array.isArray(input)) {
    return input.filter((item) => isInteger(item));
  }

  return [];
}

export { getIntegerArray };
