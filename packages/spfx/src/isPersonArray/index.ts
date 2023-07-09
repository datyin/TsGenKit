import { isPerson, type Person } from "../index";

function isPersonArray(input: unknown): input is Person[] {
  return Array.isArray(input) && input.every((item) => isPerson(item));
}

export { isPersonArray };
