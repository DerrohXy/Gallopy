import { CustomElement } from "../core";
import { Classes } from "../core";

export function Paragraph(
    properties: React.HTMLAttributes<HTMLParagraphElement> & { text: string }
) {
    return CustomElement(
        "p",
        Classes.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}
