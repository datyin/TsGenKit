import { getEmail } from "@datyin/core";
import { type Person, errorMessage, getSP } from "../index";

async function getSiteUsers() {
  try {
    const sp = getSP();
    const siteUsers = await sp.web.siteUsers.expand("Groups")();

    const users: Person[] = [];

    for (const user of siteUsers) {
      const email = user.Email || user.LoginName.split("|")[2];
      user.Email = getEmail(email);

      users.push(user);
    }

    return { users };
  }
  catch (error) {
    const message = await errorMessage(error);
    return { users: [], error: message };
  }
}

export { getSiteUsers };
