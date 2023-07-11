import { getArray } from "@datyin/core";
import { errorMessage, getList } from "../index";
import type { IItem } from "@pnp/sp/items";
import type { IAttachmentInfo } from "@pnp/sp/attachments";

interface AttachToListItemFile {
  name: string;
  buffer?: string | ArrayBuffer | Blob;
  url?: string;
};

interface AttachToListItemOptions {
  item: IItem;
  files: AttachToListItemFile[];
};

interface AttachToFileResult {
  attachments: IAttachmentInfo[];
  error?: string;
}

async function attachToListItem(options: AttachToListItemOptions): Promise<AttachToFileResult> {
  try {
    const files = getArray(options?.files);
    const currentFiles = await options.item.attachmentFiles();

    // Collect all the files that need to be added or removed
    const toBeRemoved: string[] = [];
    const toBeAdded: AttachToListItemFile[] = [];

    for (const file of currentFiles) {
      const foundInNewFiles = files.some((f) => f.name === file.FileName);

      if (!foundInNewFiles) {
        toBeRemoved.push(file.FileName);
      }
    }

    for (const file of files) {
      const foundInCurrentFiles = currentFiles.some((f) => f.FileName === file.name);

      if (file.buffer != null) {
        if (foundInCurrentFiles) {
          // in order to update existing file, we need to remove it first.
          toBeRemoved.push(file.name);
        }

        toBeAdded.push(file);
      }
    }

    await Promise.allSettled(toBeRemoved.map((f) => options.item.attachmentFiles.getByName(f).delete()));
    await Promise.allSettled(toBeAdded.map((f) => options.item.attachmentFiles.add(f.name, f.buffer)));

    const attachments = await options.item.attachmentFiles();

    return { attachments };
  }
  catch (error) {
    const message = await errorMessage(error);

    return { attachments: [], error: message };
  }
}

export { attachToListItem };
export type { AttachToListItemOptions, AttachToListItemFile, AttachToFileResult };
