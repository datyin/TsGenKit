import { isObject, isString } from "@datyin/core";
import type { Attachment } from "../index";

function isAttachment(input: unknown): input is Attachment {
  return isObject(input) && isString(input["FileName"]) && isString(input["ServerRelativeUrl"]);
}

export { isAttachment };
