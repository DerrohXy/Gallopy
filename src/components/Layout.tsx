import { CustomElement } from "../core";
import { Classes } from "../core";

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

export function VerticalLayout(
    properties: LayoutProps,
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
    properties: LayoutProps,
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

export function FlowLayout(properties: LayoutProps, ...children: Array<any>) {
    return CustomElement(
        "div",
        Classes.FLOW_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function GridLayout(properties: LayoutProps, ...children: Array<any>) {
    return CustomElement(
        "div",
        Classes.GRID_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function RelativeLayout(
    properties: LayoutProps,
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
