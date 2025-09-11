import { CustomElement } from "../core";
import { Classes } from "../core";

export function FooterBar(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.FOOTER_BAR,
        {},
        properties,
        ...children
    );
}
