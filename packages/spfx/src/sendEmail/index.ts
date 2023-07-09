import { getEmailArray, getObject, getEmail, replaceTokens } from "@datyin/core";
import { errorMessage, getSP } from "../";

interface SendEmailOptions {
  to: string[];
  from?: string;
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
  replacements?: Map<string, string>;
  headers?: Record<string, string>;
}

async function sendEmail(options: SendEmailOptions): Promise<{ success: boolean; error?: string; }> {
  try {
    await getSP().utility.sendEmail({
      From: getEmail(options.from),
      To: getEmailArray(options.to),
      BCC: getEmailArray(options.bcc),
      CC: getEmailArray(options.cc),
      Subject: replaceTokens(options.subject, options.replacements),
      Body: replaceTokens(options.body, options.replacements),
      AdditionalHeaders: {
        "content-type": "text/html",
        ...getObject(options?.headers)
      }
    });

    return { success: true };
  }
  catch (error) {
    const message = await errorMessage(error);

    return { success: false, error: message };
  }
}

export { sendEmail };
export type { SendEmailOptions };
