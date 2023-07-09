import { type Person, isPerson } from "../index";

function getPerson(input: unknown): Person | undefined {
  if (isPerson(input)) {
    return input;
  }

  return undefined;
}

export { getPerson };
