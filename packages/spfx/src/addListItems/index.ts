import { IList } from "@pnp/sp/lists";
import { errorMessage, type AddListItemOptions, type AddListItemResult, getList, addListItem } from "../index";

interface AddListItemsOptions {
  list: IList | string;
  items: Omit<AddListItemOptions, "list">[];
};

interface AddListItemsResult {
  errors?: string[];
  items: AddListItemResult[];
}

async function addListItems(options: AddListItemsOptions): Promise<AddListItemsResult> {
  try {
    const list = getList(options.list);

    const response = await Promise.allSettled(options.items.map((item) => {
      return addListItem({ list, payload: item.payload, files: item.files });
    }));

    const items: AddListItemResult[] = [];
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

export { addListItems };
export type { AddListItemsOptions, AddListItemsResult };
