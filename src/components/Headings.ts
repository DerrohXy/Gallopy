import { CustomElement } from "../core";
import { Classes } from "../core";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    text: string;
};

export function Heading1(properties: HeadingProps) {
    return CustomElement(
        "h1",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading2(properties: HeadingProps) {
    return CustomElement(
        "h2",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading3(properties: HeadingProps) {
    return CustomElement(
        "h3",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading4(properties: HeadingProps) {
    return CustomElement(
        "h4",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading5(properties: HeadingProps) {
    return CustomElement(
        "h5",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading6(properties: HeadingProps) {
    return CustomElement(
        "h6",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}
