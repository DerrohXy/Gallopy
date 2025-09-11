import { CustomElement } from "../core";
import { Classes } from "../core";

export function UnorderedList(
    properties: React.HTMLAttributes<HTMLUListElement>,
    ...listItems: Array<any>
) {
    return CustomElement(
        "ul",
        Classes.UNORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function OrderedList(
    properties: React.HTMLAttributes<HTMLOListElement>,
    ...listItems: Array<any>
) {
    return CustomElement(
        "ol",
        Classes.ORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function ListItem(
    properties: React.HTMLAttributes<HTMLLIElement>,
    ...children: Array<any>
) {
    return CustomElement("li", Classes.LIST_ITEM, {}, properties, ...children);
}
