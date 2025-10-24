import { CustomElement } from "../core";
import { Classes } from "../core";

export type EmbedProps = React.HTMLAttributes<HTMLEmbedElement>;

export function Embed(properties: EmbedProps, ...children: Array<any>) {
    return CustomElement("embed", Classes.EMBED, {}, properties, ...children);
}

export type IframeProps = React.HTMLAttributes<HTMLIFrameElement>;

export function Iframe(properties: IframeProps, ...children: Array<any>) {
    return CustomElement("iframe", Classes.IFRAME, {}, properties, ...children);
}
