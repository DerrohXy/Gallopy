import { CustomElement } from "../core";
import { Classes } from "../core";
export function Link(properties, ...children) {
    return CustomElement("a", Classes.LINK, {}, properties, ...children);
}
//# sourceMappingURL=Link.js.map