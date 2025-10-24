import { CustomElement } from "../core";
import { Classes } from "../core";

export type LabelProps = React.HTMLAttributes<HTMLSpanElement> & {
    text: string;
};

export function Label(properties: LabelProps) {
    return CustomElement(
        "span",
        Classes.LABEL,
        {},
        properties,
        properties.text
    );
}
