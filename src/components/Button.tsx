import { CustomElement } from "../core";
import { Classes } from "../core";

export type ButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    text: string;
};

export function Button(properties: ButtonProps) {
    return CustomElement(
        "div",
        Classes.BUTTON as any,
        {},
        properties,
        properties.text
    );
}
