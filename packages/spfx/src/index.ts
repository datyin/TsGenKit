import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";
import "@pnp/sp/fields";
import "@pnp/sp/attachments";
import "@pnp/sp/sputilities";
import "@pnp/sp/site-users";

// Checks
export { isPerson } from "./isPerson";
export { isPersonArray } from "./isPersonArray";

// Getters
export { cleanPayload } from "./cleanPayload";
export { errorMessage } from "./errorMessage";
export { getPerson } from "./getPerson";
export { getPersonArray } from "./getPersonArray";
export { getPageName } from "./getPageName";
export { getPageLanguage } from "./getPageLanguage";
export { getAttachmentFile } from "./getAttachmentFile";

export { toPerson } from "./toPerson";
export { toPersonArray } from "./toPersonArray";

// Functions
export { getSP, getContext } from "./sp";
export { getCurrentUser } from "./getCurrentUser";
export { getSiteUsers } from "./getSiteUsers";
export { getList } from "./getList";
export { getListItem } from "./getListItem";
export { getListItems } from "./getListItems";
export { addListItem } from "./addListItem";
export { addListItems } from "./addListItems";
export { updateListItem } from "./updateListItem";
export { updateListItems } from "./updateListItems";
export { removeListItem } from "./removeListItem";
export { attachToListItem } from "./attachToListItem";
export { sendEmail } from "./sendEmail";

// Types
export type { Person } from "./isPerson";
export type { GetCurrentUserResult } from "./getCurrentUser";
export type { AddListItemOptions, AddListItemResult } from "./addListItem";
export type { AddListItemsOptions, AddListItemsResult } from "./addListItems";
export type { UpdateListItemOptions, UpdateListItemResult } from "./updateListItem";
export type { UpdateListItemsOptions, UpdateListItemsResult } from "./updateListItems";
export type { RemoveListItemOptions, RemoveListItemResult } from "./removeListItem";
export type { AttachToListItemOptions, AttachToListItemFile, AttachToFileResult } from "./attachToListItem";
export type { GetListItemBaseOptions, GetListItemByIDOptions, GetListItemByPointerOptions, GetListItemResult } from "./getListItem";
export type { GetListItemsOptions, GetListItemsResult } from "./getListItems";
export type { GetAttachmentFileResult } from "./getAttachmentFile";
export type { SendEmailOptions } from "./sendEmail";
