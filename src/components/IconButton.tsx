import { CustomElement } from "../core";
import { Classes } from "../core";

export type IconButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    text: string;
    icon: any;
};

export function IconButton(properties: IconButtonProps) {
    return CustomElement(
        "div",
        Classes.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text
    );
}
