import { getString } from "@datyin/core";
import type { IList } from "@pnp/sp/lists";

interface SetupHistoryOptions {
  /**
   * The field name of the target (`MultiLineText`) `Plain Text`
   * @example "bat_target"
   * @default "target"
   */
  columnTarget: string;

  /**
   * The field name of the changes (`MultiLineText`) `Plain Text`
   * @example "bat_changes"
   * @default "changes"
   */
  columnChanges: string;

  /**
   * List where the history will be added
   * @example "BATHistory"
   * @default "History"
   */
  list: IList | string;
}

const historyOptions: SetupHistoryOptions = {
  columnTarget: "target",
  columnChanges: "changes",
  list: "History",
};

function setupHistory(options: Partial<SetupHistoryOptions>) {
  historyOptions.columnTarget = getString(options.columnTarget) || "target";
  historyOptions.columnChanges = getString(options.columnChanges) || "changes";
  historyOptions.list = options.list || "History";
}

function getHistoryOptions(): SetupHistoryOptions {
  return historyOptions;
}

export { setupHistory, getHistoryOptions };
export type { SetupHistoryOptions };
