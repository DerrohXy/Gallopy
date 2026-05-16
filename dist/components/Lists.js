import { CustomElement } from "../core";
import { Classes } from "../core";
export function UnorderedList(properties, ...listItems) {
    return CustomElement("ul", Classes.UNORDERED_LIST, {}, properties, ...listItems);
}
export function OrderedList(properties, ...listItems) {
    return CustomElement("ol", Classes.ORDERED_LIST, {}, properties, ...listItems);
}
export function ListItem(properties, ...children) {
    return CustomElement("li", Classes.LIST_ITEM, {}, properties, ...children);
}
//# sourceMappingURL=Lists.js.map