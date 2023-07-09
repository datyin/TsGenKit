import { errorMessage, cleanPayload, getList } from "../index";
import { attachToListItem, type AttachToListItemFile } from "../attachToListItem";
import type { IItem } from "@pnp/sp/items";
import type { IList } from "@pnp/sp/lists";
import type { IAttachmentInfo } from "@pnp/sp/attachments";

interface AddListItemOptions {
  list: IList | string;
  payload: Record<string, any>;
  files?: AttachToListItemFile[]
};

interface AddListItemResult {
  item: IItem | undefined;
  attachments: IAttachmentInfo[];
  error?: string;
};

/**
 * Add item to list.
 *
 * @param options 
 * @returns item, attachments, error
 */
async function addListItem(options: AddListItemOptions): Promise<AddListItemResult> {
  try {
    const list = getList(options.list);
    const payload = cleanPayload(options.payload);
    const { item } = await list.items.add(payload);

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

export { addListItem };
export type { AddListItemOptions, AddListItemResult };
