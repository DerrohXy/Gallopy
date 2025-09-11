import { CustomElement } from "../core";
import { Classes } from "../core";

export function ScrollWindow(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function VerticalScrollWindow(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.VERTICAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function HorizontalScrollWindow(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.HORIZONTAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}
