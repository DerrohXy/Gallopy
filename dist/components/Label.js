import { CustomElement } from "../core";
import { Classes } from "../core";
export function Label(properties) {
    return CustomElement("span", Classes.LABEL, {}, properties, properties.text);
}
//# sourceMappingURL=Label.js.map