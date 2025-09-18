import { CustomElement } from "../core";
import { Classes } from "../core";

export type SelectProps = React.HTMLAttributes<HTMLSelectElement>;

export function Select(properties: SelectProps, ...options: Array<any>) {
    return CustomElement(
        "select",
        Classes.SELECTION,
        {},
        properties,
        ...options
    );
}

export type OptionProps = React.HTMLAttributes<HTMLOptionElement> & {
    text?: string;
};

export function Option(properties: OptionProps) {
    return CustomElement(
        "option",
        Classes.OPTION,
        {},
        properties,
        properties.text || ""
    );
}
