import { getArray, isEmail, isNumberID, isString } from "@datyin/core";
import { type Person, isPerson } from "../index";
import type { ISiteUserInfo } from "@pnp/sp/site-users/types";

function toPerson(input: unknown, siteUsers: (ISiteUserInfo | Person)[]): Person | undefined {
  if (isPerson(input)) {
    return input;
  }
  else if (isNumberID(input)) {
    const person = getArray(siteUsers).find((item) => isPerson(item) && item.Id === input);

    if (person != null) {
      return person;
    }
  }
  else if (isEmail(input)) {
    const lcInput = input.toLowerCase();

    const person = getArray(siteUsers).find((item) => {
      return (
        isPerson(item) &&
        (
          item.Email.toLowerCase() === lcInput ||
          item.LoginName.toLowerCase().includes(lcInput)
        )
      );
    });

    if (person != null) {
      return person;
    }
  }
  else if (isString(input)) {
    const lcInput = input.toLowerCase();

    const person = getArray(siteUsers).find((item) => {
      return isPerson(item) && item.Title.toLowerCase() === lcInput;
    });

    if (person != null) {
      return person;
    }
  }

  return undefined;
}

export { toPerson };
