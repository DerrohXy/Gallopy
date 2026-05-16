import { CustomElement } from "../core";
import { Classes } from "../core";
export function Embed(properties, ...children) {
    return CustomElement("embed", Classes.EMBED, {}, properties, ...children);
}
export function Iframe(properties, ...children) {
    return CustomElement("iframe", Classes.IFRAME, {}, properties, ...children);
}
//# sourceMappingURL=Media.js.map