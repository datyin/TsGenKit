import { isNumber } from "../index";

function getNumberArray(input: unknown): number[] {
  if (Array.isArray(input)) {
    return input.filter((item) => isNumber(item));
  }

  return [];
}

export { getNumberArray };
