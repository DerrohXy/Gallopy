import { CustomElement } from "../core";
import { Classes } from "../core";

export type ImageViewProps = React.HTMLAttributes<HTMLImageElement>;

export function ImageView(properties: ImageViewProps) {
    return CustomElement("img", Classes.IMAGE_VIEW, {}, properties);
}
