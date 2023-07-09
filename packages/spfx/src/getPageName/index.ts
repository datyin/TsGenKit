import { getString } from "@datyin/core";
import { getContext } from "../index";

function getPageName(): string {
  const context = getContext();
  return getString(context?.pageContext?.web?.title);
}

export { getPageName };
