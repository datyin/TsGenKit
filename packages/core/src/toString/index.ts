import { isDate } from "../isDate";

interface ToStringOptions {
  /**
   * Default string if input is impossible to convert.
   */
  default: string;
}

function toString(input: unknown, options: Partial<ToStringOptions> = {}): string {
  if (typeof input === "string") {
    return input;
  }

  if (isDate(input)) {
    return input.toISOString();
  }

  if (input != null) {
    return input.toString();
  }

  return typeof options?.default === "string" ? options.default : "";
}

export { toString };
export type { ToStringOptions };
