import { getEmail } from "@datyin/core";
import { type Person, errorMessage, getSP } from "../index";

interface GetCurrentUserResult {
  user: Person | undefined;
  error?: string;
};

async function getCurrentUser(): Promise<GetCurrentUserResult> {
  try {
    const sp = getSP();
    const user = await sp.web.currentUser.expand("Groups")();

    // Fix user email if not set
    const email = user.Email || user.LoginName.split("|")[2];
    user.Email = getEmail(email);

    return { user };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { user: undefined, error: message };
  }
}

export { getCurrentUser };
export type { GetCurrentUserResult };
