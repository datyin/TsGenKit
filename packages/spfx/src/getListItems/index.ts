import { getString, getStringArray } from "@datyin/core";
import { errorMessage, getList } from "../index";
import type { IList } from "@pnp/sp/lists";

interface GetListItemsOptions {
  list: IList | string;
  filter?: string;
  select?: string[];
  expand?: string[];
  parser?: (item: any) => any;
}

interface GetListItemsResult<T = Record<string, any>> {
  data: T[];
  error?: string;
};

async function getListItems<T = Record<string, any>>(options: GetListItemsOptions): Promise<GetListItemsResult<T>> {
  try {
    const list = getList(options.list);

    const filter = getString(options.filter);
    const select = getStringArray(options.select);
    const expand = getStringArray(options.expand);

    if (!expand.includes("EncodedAbsUrl")) expand.push("EncodedAbsUrl");
    if (!expand.includes("AttachmentFiles")) expand.push("AttachmentFiles");

    const rows = await list.items.filter(filter).select(...select).expand(...expand).getAll();
    const data: T[] = [];

    for (const item of rows) {
      const parsed = options.parser != null ? options.parser(item) : item;

      if (parsed != null) {
        data.push(parsed);
      }
    }

    return { data };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { data: [], error: message };
  }
}

export { getListItems };
export type { GetListItemsOptions, GetListItemsResult };
