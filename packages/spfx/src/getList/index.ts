import { getSP } from "../sp";
import type { IList } from "@pnp/sp/lists";

function getList(targetList: IList | string): IList {
  return typeof targetList === "string" ? getSP().web.lists.getByTitle(targetList) : targetList;
}

export { getList };
