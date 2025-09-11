import { CustomElement } from "../core";
import { Classes } from "../core";

export function Label(
    properties: React.HTMLAttributes<HTMLSpanElement> & { text: string }
) {
    return CustomElement(
        "span",
        Classes.LABEL,
        {},
        properties,
        properties.text
    );
}
