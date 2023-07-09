import { getString } from "@datyin/core";
import { isAttachment } from "../index";

interface Attachment {
  FileName: string;
  ServerRelativeUrl: string;
};

function getAttachmentFile(input: unknown): Attachment | undefined {
  if (!isAttachment(input)) {
    return undefined;
  }

  return {
    FileName: getString(input["FileName"]),
    ServerRelativeUrl: getString(input["ServerRelativeUrl"])
  }
}

export { getAttachmentFile };
export type { Attachment };
