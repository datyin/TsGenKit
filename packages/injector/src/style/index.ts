import { toString } from "@datyin/core";

/**
 * Injects a style tag into the document head.
 *
 * @param id id of the style tag so it can be removed later
 * @param css array of css strings
 * 
 * @example
 * ```ts
 * import { injectStyle } from "@datyin/injector";
 * 
 * injectStyle("my-styles", [
 *   // Remove width limitation from page.
 *   '.CanvasZone > div { width: 100% !important; max-width: 100% !important; }',
 *
 *   // Remove the "New" button from the top bar.
 *   '.ms-CommandBar-primaryCommand { visibility: hidden; }',
 *
 *   // Remove the "Recycle Bin" link from the top bar.
 *   'a[href*="AdminRecycleBin.aspx"] { display: none; }',
 * ]);
 * ```
 */
function injectStyle(id: string, css: string[]) {
  const name = toString(id).trim() || "injected-styles";
  const alreadyHooked = document.querySelector(`style[data-css-injection="${name}"]`);

  if (alreadyHooked == null) {
    const element = document.createElement("style");
    element.dataset["data-css-injection"] = name;
    element.innerHTML = css.join("\n");
  
    document.head.append(element);
  }
}

/**
 * Appends a style tag into the previously injected style tag.
 *
 * @param id id of the style tag so it can be removed later
 * @param css array of css strings
 */
function appendInjectStyle(id: string, css: string[]) {
  const name = toString(id).trim() || "injected-styles";
  const alreadyHooked = document.querySelector(`style[data-css-injection="${name}"]`);

  if (alreadyHooked == null) {
    const element = document.createElement("style");
    element.dataset["data-css-injection"] = name;
    element.innerHTML = css.join("\n");

    document.head.append(element);
  }
  else {
    const hookedCSS = alreadyHooked.innerHTML.split("\n");
    alreadyHooked.innerHTML += [...hookedCSS, ...css].join("\n");
  }
}

/**
 * Removes a style tag from the document head.
 * @param id the id of the style tag to remove
 * 
 * @example
 * ```ts
 * import { uninjectStyle } from "@datyin/injector";
 * 
 * uninjectStyle("my-styles");
 * ```
 */
function uninjectStyle(id: string) {
  const name = toString(id).trim() || "injected-styles";
  const alreadyHooked = document.querySelector(`style[data-css-injection="${name}"]`);

  if (alreadyHooked != null) {
    alreadyHooked.remove();
  }
}

export { injectStyle, appendInjectStyle, uninjectStyle }
