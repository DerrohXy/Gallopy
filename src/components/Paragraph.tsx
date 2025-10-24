import { CustomElement } from "../core";
import { Classes } from "../core";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
    text: string;
};

export function Paragraph(properties: ParagraphProps) {
    return CustomElement(
        "p",
        Classes.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}
