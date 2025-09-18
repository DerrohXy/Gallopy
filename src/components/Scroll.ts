import { CustomElement } from "../core";
import { Classes } from "../core";

export type ScrollWindowProps = React.HTMLAttributes<HTMLDivElement>;

export function ScrollWindow(
    properties: ScrollWindowProps,
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
    properties: ScrollWindowProps,
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
    properties: ScrollWindowProps,
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
