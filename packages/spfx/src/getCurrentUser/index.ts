import { type Person, errorMessage, getSP } from "../index";

interface GetCurrentUserResult {
  user: Person | undefined;
  error?: string;
};

async function getCurrentUser(): Promise<GetCurrentUserResult> {
  try {
    const sp = getSP();
    const user = await sp.web.currentUser.expand("Groups")();

    return { user };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { user: undefined, error: message };
  }
}

export { getCurrentUser };
export type { GetCurrentUserResult };
