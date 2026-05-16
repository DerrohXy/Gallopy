import { CustomElement } from "../core";
import { Classes } from "../core";
export function Select(properties, ...options) {
    return CustomElement("select", Classes.SELECTION, {}, properties, ...options);
}
export function Option(properties) {
    return CustomElement("option", Classes.OPTION, {}, properties, properties.text || "");
}
//# sourceMappingURL=Selection.js.map