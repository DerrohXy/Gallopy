import { CustomElement } from "../core";
import { Classes } from "../core";

export type FooterBarProps = React.HTMLAttributes<HTMLDivElement>;

export function FooterBar(properties: FooterBarProps, ...children: Array<any>) {
    return CustomElement(
        "div",
        Classes.FOOTER_BAR,
        {},
        properties,
        ...children
    );
}
