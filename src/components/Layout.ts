import { CustomElement } from "../core";
import { Classes } from "../core";

export function VerticalLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.VERTICAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function HorizontalLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.HORIZONTAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function FlowLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.FLOW_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function GridLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.GRID_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function RelativeLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.RELATIVE_LAYOUT,
        {},
        properties,
        ...children
    );
}
