import { CustomElement } from "../core";
import { Classes } from "../core";

export function Embed(
    properties: React.HTMLAttributes<HTMLEmbedElement>,
    ...children: Array<any>
) {
    return CustomElement("embed", Classes.EMBED, {}, properties, ...children);
}

export function Iframe(
    properties: React.HTMLAttributes<HTMLIFrameElement>,
    ...children: Array<any>
) {
    return CustomElement("iframe", Classes.IFRAME, {}, properties, ...children);
}
