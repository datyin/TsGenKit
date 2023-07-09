import { type Attachment, isAttachment } from "../index";

function getAttachmentFileArray(input: unknown): Attachment[] {
  if (Array.isArray(input)) {
    return input.filter((item) => isAttachment(item));
  }

  return [];
}

export { getAttachmentFileArray };
