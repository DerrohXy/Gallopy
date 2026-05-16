import { CustomElement } from "../core";
import { Classes } from "../core";
export function Button(properties) {
    return CustomElement("div", Classes.BUTTON, {}, properties, properties.text);
}
//# sourceMappingURL=Button.js.map