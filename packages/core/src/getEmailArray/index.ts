import { isEmail } from "../index";

function getEmailArray(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input.filter((item) => isEmail(item))
  }

  return [];
}

export { getEmailArray };
