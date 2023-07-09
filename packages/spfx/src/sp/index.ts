import type { WebPartContext } from "@microsoft/sp-webpart-base";
import { type SPFI, SPFx, spfi } from "@pnp/sp";

let _spfx: SPFI | undefined = undefined;

/**
 * Get pnp instance of SPFx
 * 
 * @remarks
 * You need to call this function at least once with a context to initialize the SPFx instance
 * After that you can call it without a context to get the same instance from memory.
 * 
 * @param context 
 * @returns SPFx instance
 * 
 * @example In a webpart index
 * ```ts
 * import { getSP } from "@datyin/spfx";
 * 
 * export default class WebPart extends BaseClientSideWebPart<{}> {
 *   protected override async onInit() {
 *     await super.onInit();
 *     getSP(this.context);
 *   }
 * }
 * ```
 * 
 * @example In a webpart component
 * ```ts
 * import { getSP } from "@datyin/spfx";
 * 
 * const sp = getSP();
 * ```
 */
function getSP(context: WebPartContext | undefined = undefined): SPFI {
  if (_spfx != null) {
    return _spfx;
  }

  if (context != null) {
    _spfx = spfi().using(SPFx(context));
    return _spfx;
  }

  return spfi();
}

export { getSP };
