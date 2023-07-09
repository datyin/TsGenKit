import { getInteger } from "@datyin/core";
import { errorMessage, getList } from "../index";
import type { IList } from "@pnp/sp/lists";

interface RemoveListItemOptions {
  id: number;
  list: IList | string;
  eTag?: string;
}

interface RemoveListItemResult {
  ID: number;
  error?: string;
}

async function removeListItem(options: RemoveListItemOptions): Promise<RemoveListItemResult> {
  // Get the list and payload.
  const list = getList(options.list);

  // Get id from input.
  const ID = getInteger(options.id);

  try {
    await list.items.getById(ID).delete(options.eTag);

    return { ID };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { ID, error: message };
  }
}

export { removeListItem };
export type { RemoveListItemOptions, RemoveListItemResult };
