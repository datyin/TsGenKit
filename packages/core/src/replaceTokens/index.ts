import { getString } from "../getString";

function replaceTokens(input: string, replacements?: Map<string, string>): string {
  if (replacements == null) {
    return getString(input);
  }

  let result = getString(input);

  replacements.forEach((value, key) => {
    // replace all instances of the key inside {{ key }} or {{key}} with the value.
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    result = result.replace(regex, value);
  });

  return result;
}

export { replaceTokens };
