import { type Person, isPerson } from "../index";

function getPersonArray(input: unknown): Person[] {
  if (Array.isArray(input)) {
    return input.filter((item) => isPerson(item));
  }

  return [];
}

export { getPersonArray };
