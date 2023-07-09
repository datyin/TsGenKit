import { type Person, toPerson } from "../index";
import type { ISiteUserInfo } from "@pnp/sp/site-users/types";

function toPersonArray(input: unknown, siteUsers: (ISiteUserInfo | Person)[]): Person[] {
  const people: Person[] = [];

  if (Array.isArray(input)) {
    for (const item of input) {
      const person = toPerson(item, siteUsers);

      if (person != null) {
        people.push(person);
      }
    }
  }
  else {
    const person = toPerson(input, siteUsers);

    if (person != null) {
      people.push(person);
    }
  }

  return people;
}

export { toPersonArray };
