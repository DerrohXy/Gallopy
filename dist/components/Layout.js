import { CustomElement } from "../core";
import { Classes } from "../core";
export function VerticalLayout(properties, ...children) {
    return CustomElement("div", Classes.VERTICAL_LAYOUT, {}, properties, ...children);
}
export function HorizontalLayout(properties, ...children) {
    return CustomElement("div", Classes.HORIZONTAL_LAYOUT, {}, properties, ...children);
}
export function FlowLayout(properties, ...children) {
    return CustomElement("div", Classes.FLOW_LAYOUT, {}, properties, ...children);
}
export function GridLayout(properties, ...children) {
    return CustomElement("div", Classes.GRID_LAYOUT, {}, properties, ...children);
}
export function RelativeLayout(properties, ...children) {
    return CustomElement("div", Classes.RELATIVE_LAYOUT, {}, properties, ...children);
}
//# sourceMappingURL=Layout.js.map