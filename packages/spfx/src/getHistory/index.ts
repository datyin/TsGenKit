import { getArray, getInteger, getString } from "@datyin/core";
import { type HistoryChange, errorMessage, getList, getHistoryOptions } from "../index";

interface GetHistoryItem {
  ID: number;
  AuthorId: number;
  Created: string;
  target: string;
  changes: HistoryChange[]
}

interface GetHistoryOptions {
  /**
   * The key target of the history
   * @example "bat_customer_123"
   * @example "bat_event_456"
   */
  target: string;

  /**
   * Filter specific language
   * @example "en"
   * @example "de"
   * 
   * @default undefined - all languages
   */
  language?: string;
}

interface GetHistoryResult {
  logs: GetHistoryItem[];
  error?: string;
}

/**
 * Get history
 * @param options
 */
async function getHistory(options: GetHistoryOptions): Promise<GetHistoryResult> {
  try {
    const settings = getHistoryOptions();
    const target = getString(options.target);
    const list = getList(settings.list);
    const rows = await list.items.filter(`${settings.columnTarget} eq '${target}'`).getAll();
    const logs: GetHistoryItem[] = [];

    for (const row of rows) {
      const ID = getInteger(row?.ID);
      const AuthorId = getInteger(row?.AuthorId);

      if (!ID || !AuthorId) {
        continue;
      }

      const language = getString(row.Language);
      
      if (options.language && language && language !== options.language) {
        continue;
      }
      
      logs.push({
        ID: getInteger(row.ID),
        AuthorId: getInteger(row.AuthorId),
        Created: getString(row.Modified) || getString(row.Created) || new Date().toISOString(),
        target,
        changes: getArray(JSON.parse(getString(row[settings.columnChanges]) || "[]")) as HistoryChange[]
      });
    }

    return { logs };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { logs: [], error: message };
  }
}

export { getHistory };
export type { GetHistoryItem, GetHistoryOptions, GetHistoryResult };
