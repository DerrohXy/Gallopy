import { CustomElement } from "../core";
import { Classes } from "../core";

export function Heading1(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement(
        "h1",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading2(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement(
        "h2",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading3(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement(
        "h3",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading4(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement(
        "h4",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading5(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement(
        "h5",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading6(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement(
        "h6",
        Classes.HEADING,
        {},
        properties,
        properties.text
    );
}
