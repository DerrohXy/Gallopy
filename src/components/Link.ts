import { CustomElement } from "../core";
import { Classes } from "../core";

export function Link(
    properties: React.HTMLAttributes<HTMLAnchorElement>,
    ...children: Array<any>
) {
    return CustomElement("a", Classes.LINK, {}, properties, ...children);
}
