import { CustomElement } from "../core";
import { Classes } from "../core";

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement>;

export function Link(properties: LinkProps, ...children: Array<any>) {
    return CustomElement("a", Classes.LINK, {}, properties, ...children);
}
