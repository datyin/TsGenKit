import { getArray, getString } from "@datyin/core";
import { errorMessage, getHistoryOptions, getList } from "../index";
import type { IItem } from "@pnp/sp/items";
import type { IList } from "@pnp/sp/lists";

interface HistoryChange {
  /**
   * Specific the language of the change
   */
  language?: string;

  /**
   * The field name of the change
   */
  field?: string;

  /**
   * The old value
   */
  from?: unknown;

  /**
   * The new value
   */
  into?: unknown;
};

interface AddHistoryOptions {
  /**
   * The key target of the history
   * @example "bat_customer_123"
   * @example "bat_event_456"
   */
  target: string;

  /**
   * The changes to add to history
   * @example [{ field: "Title", from: "Old Title", into: "New Title" }]
   * @example [{ language: "en", field: "Title", from: "Old Title", into: "New Title" }]
   * @example [{ language: "en", field: "Title", into: "New Title" }, { language: "de", field: "Title", into: "Neuer Titel" }]
   */
  changes: HistoryChange[];
}

interface AddHistoryResult {
  error?: string;
  item?: IItem;
}

/**
 * Add change to history
 * @param options
 */
async function addHistory(options: AddHistoryOptions): Promise<AddHistoryResult> {
  try {
    const changes = getArray(options.changes);

    if (changes.length === 0) {
      return { error: "No changes to add to history" };
    }

    const settings = getHistoryOptions();

    const target = getString(options.target);
    const list = getList(settings.list);

    const { item } = await list.items.add({
      [settings.columnTarget]: target,
      [settings.columnChanges]: JSON.stringify(changes)
    });

    return { item };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { error: message };
  }
}

export { addHistory };
export type { HistoryChange, AddHistoryOptions, AddHistoryResult };
