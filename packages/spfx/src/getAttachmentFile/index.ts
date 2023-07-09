import { getString, isObject } from "@datyin/core";

interface GetAttachmentFileResult {
  FileName: string;
  ServerRelativeUrl: string;
};

function getAttachmentFile(input: unknown): GetAttachmentFileResult | undefined {
  if (!isObject(input)) {
    return undefined;
  }

  return {
    FileName: getString(input["FileName"]),
    ServerRelativeUrl: getString(input["ServerRelativeUrl"])
  }
}

export { getAttachmentFile };
export type { GetAttachmentFileResult };
