import { CustomElement } from "../core";
import { Classes } from "../core";

export function IconButton(
    properties: React.HTMLAttributes<HTMLDivElement> & {
        text: string;
        icon: any;
    }
) {
    return CustomElement(
        "div",
        Classes.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text
    );
}
