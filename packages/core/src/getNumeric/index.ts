import { isBoolean } from "../isBoolean";
import { isDate } from "../isDate";

/**
 * Get numeric value from input.
 * 
 * Please note that decimal spaces might not be shown on big numbers
 * since JavaScript uses IEEE-754 floating point numbers!
 * 
 * @param input The value to convert.
 * @returns numeric value as string or empty string if input is not possible to convert to a number.
 */
function getNumeric(input: unknown): string {
  let value = "";

  if (isDate(input)) {
    value = input.getTime().toString();
  }
  else if (isBoolean(input)) {
    value = input ? "1" : "0";
  }
  else if (Array.isArray(input)) {
    // don't convert arrays
    value = "";
  }
  else if (input != null) {
    value = input.toString()
  }

  if (/^0x[0-9a-fA-F]+$/.test(value)) {
    // hex string like 0xff
    value = Number.parseInt(value, 16).toString()
  }
  else {
    /**
     * Please note that decimal spaces might not be shown on big numbers
     * since JavaScript uses IEEE-754 floating point numbers!
     */
      
    // extract numeric value from string
    const numericValue = value.match(/-?\d+(?:[.,_]\d+)*(?:[.,_]\d+(?:[eE][+-]{0,1}\d+)?)/g)?.[0]
      // numbers without decimal places
      ?? value.match(/-?\d+(?:[.,_]\d+)*(?:[eE][+-]{0,1}\d+)?/g)?.[0]
      ?? ""
    ;

    // Scientific notation
    if (numericValue.includes("e") || numericValue.includes("E")) {
      value = Number.parseFloat(numericValue).toLocaleString("fullwide", { useGrouping: false });
    }
    else if (numericValue) {
      if (/^-?\d{1,3}(?:,?\d{3}){0,5}(?:\.\d{1,20})?(?:[eE][+-]{0,1}\d+)?$/.test(numericValue)) {
        // value like: 1,234,567,890.12345678901234567890
        value = numericValue.replace(/,/g, "");
      }
      else if (/^-?\d{1,3}(?:_?\d{3}){0,5}(?:\.\d{1,20})?(?:[eE][+-]{0,1}\d+)?$/.test(numericValue)) {
        // value like: 1_234_567_890,12345678901234567890
        value = numericValue.replace(/_/g, "");
      }
      else if (/^-?\d{1,3}(?:\.?\d{3}){0,5}(?:,\d{1,20})?(?:[eE][+-]{0,1}\d+)?$/.test(numericValue)) {
        value = numericValue.replace(/\./g, "").replace(/,/g, ".");
      }
    }
  }

  const number = Number.parseFloat(value);

  return Number.isFinite(number) ? number.toLocaleString("fullwide", { useGrouping: false }) : "";
}

export { getNumeric }
