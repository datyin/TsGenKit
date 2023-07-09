import { errorMessage, getList, updateListItem } from "../index";
import type { IList } from "@pnp/sp/lists";
import type { UpdateListItemOptions, UpdateListItemResult } from "../index";

interface UpdateListItemsOptions {
  list: IList | string;
  items: Omit<UpdateListItemOptions, "list">[];
};

interface UpdateListItemsResult {
  errors?: string[];
  items: UpdateListItemResult[];
};

async function updateListItems(options: UpdateListItemsOptions): Promise<UpdateListItemsResult> {
  try {
    const list = getList(options.list);

    const response = await Promise.allSettled(options.items.map((item) => {
      return updateListItem({ list, id: item.id, payload: item.payload, files: item.files });
    }));

    const items: UpdateListItemResult[] = [];
    const errors: string[] = [];

    for (const item of response) {
      if (item.status === "rejected") {
        errors.push(item.reason);
      }
      else {
        if (item.value.error != null) {
          errors.push(item.value.error);
        }
        else {
          items.push(item.value);
        }
      }
    }
  }
  catch (error) {
    const message = await errorMessage(error);
    return { items: [], errors: [message] };
  }
}

export { updateListItems };
export type { UpdateListItemsOptions, UpdateListItemsResult };
