import { CustomElement } from "../core";
import { Classes } from "../core";
export function ScrollWindow(properties, ...children) {
    return CustomElement("div", Classes.SCROLL_WINDOW, {}, properties, ...children);
}
export function VerticalScrollWindow(properties, ...children) {
    return CustomElement("div", Classes.VERTICAL_SCROLL_WINDOW, {}, properties, ...children);
}
export function HorizontalScrollWindow(properties, ...children) {
    return CustomElement("div", Classes.HORIZONTAL_SCROLL_WINDOW, {}, properties, ...children);
}
//# sourceMappingURL=Scroll.js.map