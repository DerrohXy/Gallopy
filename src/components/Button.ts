import { CustomElement } from "../core";
import { Classes } from "../core";

export function Button(
    properties: React.HTMLAttributes<HTMLDivElement> & { text: string }
) {
    return CustomElement(
        "div",
        Classes.BUTTON as any,
        {},
        properties,
        properties.text
    );
}
