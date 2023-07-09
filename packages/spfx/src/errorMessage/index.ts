import { getString } from "@datyin/core";
import type { HttpRequestError } from "@pnp/queryable";

/**
 * Get a user friendly error message from the pnp error object or the error object itself.
 *
 * @param input The error object.
 * @returns A user friendly error message.
 */
async function errorMessage(input: unknown): Promise<string> {
  if ((input as HttpRequestError)?.isHttpRequestError) {
    // we can read the json from the response
    const json = await (input as HttpRequestError).response.json() as Record<string, any>;

    // if we have a value property we can show it
    if (typeof json["odata.error"] === "object") {
      return getString(json["odata.error"]?.message?.value);
    }
    else if (input && typeof input === "object" && "message" in input) {
      return getString(input.message);
    }

    // add of course you have access to the other properties and can make choices on how to act
    if ((input as HttpRequestError).status === 404) {
      return getString((input as HttpRequestError).statusText);
    }
  }

  return input != null && typeof input === "object" && "message" in input ? getString(input.message) : "Unknown error";
}

export { errorMessage };
