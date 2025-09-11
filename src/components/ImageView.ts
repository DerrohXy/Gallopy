import { CustomElement } from "../core";
import { Classes } from "../core";

export function ImageView(properties: React.HTMLAttributes<HTMLImageElement>) {
    return CustomElement("img", Classes.IMAGE_VIEW, {}, properties);
}
