import { isDate, isObject } from "@datyin/core";

function cleanPayload(payload: unknown): Record<string, any> {
  if (!isObject(payload)) {
    return {};
  }

  const clean: Record<string, any> = {};

  for (const key in payload) {
    const lcKey = key.toLowerCase();

    // we don't want to send the id or attachment files
    if (lcKey === "id" || lcKey === "attachmentfiles") {
      continue;
    }

    if (payload[key] === undefined) {
      clean[key] = null;
    }
    else if (isDate(payload[key])) {
      clean[key] = payload[key].toISOString();
    }
    else if (!Array.isArray(payload[key]) && payload[key] != null && typeof payload[key] === "object") {
      // handle libraries like Dayjs, Luxon, Moment, etc.
      if ("toISOString" in payload[key]) {
        clean[key] = payload[key].toISOString();
      }
    }
    else {
      clean[key] = payload[key];
    }
  }

  return clean;
}

export { cleanPayload };
