import { CustomElement } from "../core";
import { Classes } from "../core";

export function Select(
    properties: React.HTMLAttributes<HTMLSelectElement>,
    ...options: Array<any>
) {
    return CustomElement(
        "select",
        Classes.SELECTION,
        {},
        properties,
        ...options
    );
}

export function Option(
    properties: React.HTMLAttributes<HTMLOptionElement> & { text?: string }
) {
    return CustomElement(
        "option",
        Classes.OPTION,
        {},
        properties,
        properties.text || ""
    );
}
