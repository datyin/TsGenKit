import { getString } from "@datyin/core";
import { getContext } from "../index";

function getPageLanguage() {
  const context = getContext();
  return getString(context?.pageContext?.cultureInfo?.currentUICultureName);
}

export { getPageLanguage };
