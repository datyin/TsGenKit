import { getStringArray } from "@datyin/core";
import { errorMessage, getList } from "../index";
import type { IList } from "@pnp/sp/lists";
import type { IItem } from "@pnp/sp/items";

interface GetListItemBaseOptions {
  select?: string[];
  expand?: string[];
  parser?: (item: any) => any;
}

interface GetListItemByIDOptions extends GetListItemBaseOptions {
  list: IList | string;
  id: number;
}

interface GetListItemByPointerOptions extends GetListItemBaseOptions {
  item: IItem;
}

interface GetListItemResult<T = Record<string, any>> {
  item: IItem | undefined;
  data: T | undefined;
  error?: string;
};

async function getListItem<T = Record<string, any>>(options: GetListItemByIDOptions | GetListItemByPointerOptions): Promise<GetListItemResult<T>> {
  try {
    let item: IItem | undefined = undefined;

    if ("item" in options) {
      item = options.item;
    }
    else {
      const list = getList(options.list);
      item = list.items.getById(options.id);
    }

    const select = getStringArray(options.select);
    const expand = getStringArray(options.expand);

    if (select.length === 0) select.push("*");
    if (!select.includes("EncodedAbsUrl")) select.push("EncodedAbsUrl");
    if (!expand.includes("AttachmentFiles")) expand.push("AttachmentFiles");

    const data = await item.select(...select).expand(...expand)();

    if (options.parser != null) {
      return { item, data: options.parser(data) };
    }

    return { item, data };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { item: undefined, data: undefined, error: message };
  }
}

export { getListItem };
export type { GetListItemBaseOptions, GetListItemByIDOptions, GetListItemByPointerOptions, GetListItemResult };
