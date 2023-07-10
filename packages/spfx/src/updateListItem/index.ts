import { getInteger } from "@datyin/core";
import { errorMessage, cleanPayload, getList } from "../index";
import { attachToListItem, type AttachToListItemFile } from "../attachToListItem";
import type { IItem } from "@pnp/sp/items";
import type { IList } from "@pnp/sp/lists";
import type { IAttachmentInfo } from "@pnp/sp/attachments";

interface UpdateListItemOptions {
  list: IList | string;
  id: number;
  payload: Record<string, any>;
  files?: AttachToListItemFile[]
}

interface UpdateListItemResult {
  item: IItem | undefined;
  attachments: IAttachmentInfo[];
  error?: string;
};

async function updateListItem(options: UpdateListItemOptions): Promise<UpdateListItemResult> {
  try {
    // Get the list and payload.
    const list = getList(options.list);
    const payload = cleanPayload(options.payload);

    // Get id from input or payload if provided.
    const id = getInteger(options.id) || getInteger(options?.payload?.ID) || getInteger(options?.payload?.Id);

    // update the list item.
    const { item } = await list.items.getById(id).update(payload);

    if (item != null && Array.isArray(options.files) && options.files.length > 0) {
      const { attachments, error } = await attachToListItem({ item, files: options.files });

      return { item, attachments, error}
    }

    return { item, attachments: [] };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { item: undefined, attachments: [], error: message };
  }
}

export { updateListItem };
export type { UpdateListItemOptions, UpdateListItemResult };
