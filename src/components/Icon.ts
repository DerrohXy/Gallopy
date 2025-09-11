import { CustomElement } from "../core";
import { Classes } from "../core";

export function Icon(
    properties: React.HTMLAttributes<HTMLSpanElement> & { text: string }
) {
    return CustomElement("i", Classes.ICON, {}, properties);
}
