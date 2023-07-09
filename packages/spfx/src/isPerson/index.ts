import { isNumberID, isObject, isString } from "@datyin/core";
import type { ISiteUserInfo } from "@pnp/sp/site-users/types";
import type { ISiteGroupInfo } from "@pnp/sp/site-groups/types";

type Person = ISiteUserInfo & { Groups?: ISiteGroupInfo[] };

function isPerson(input: unknown): input is Person {
  if (!isObject<ISiteUserInfo>(input)) {
    return false;
  }

  return (
    isString(input.Title) &&
    isString(input.LoginName) &&
    isNumberID(input.Id)
  );
}

export { isPerson };
export type { Person };
