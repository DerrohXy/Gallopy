import { CustomElement } from "../core";
import { Classes } from "../core";
export function IconButton(properties) {
    return CustomElement("div", Classes.ICON_BUTTON, {}, properties, properties.icon || null, properties.text);
}
//# sourceMappingURL=IconButton.js.map