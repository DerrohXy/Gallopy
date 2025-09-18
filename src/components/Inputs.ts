import { CustomElement } from "../core";
import { Classes } from "../core";

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export function TextInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.TEXT_INPUT,
        {
            type: "text",
        },
        properties
    );
}

export function NumberInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.NUMBER_INPUT,
        {
            type: "number",
        },
        properties
    );
}

export function WeekInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.WEEK_INPUT,
        {
            type: "week",
        },
        properties
    );
}

export function TimeInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.TIME_INPUT,
        {
            type: "time",
        },
        properties
    );
}

export function MonthInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.MONTH_INPUT,
        {
            type: "month",
        },
        properties
    );
}

export function DatetimeInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.DATETIME_INPUT,
        {
            type: "datetime-local",
        },
        properties
    );
}

export function DateInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.DATE_INPUT,
        {
            type: "date",
        },
        properties
    );
}

export type TextAreaProps = React.HTMLAttributes<HTMLTextAreaElement>;

export function TextArea(properties: TextAreaProps) {
    return CustomElement(
        "textarea",
        Classes.TEXT_AREA,
        {
            rows: 5,
        },
        properties
    );
}

export function PasswordInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.PASSWORD_INPUT,
        {
            type: "password",
        },
        properties
    );
}

export function ColorInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.COLOR_INPUT,
        {
            type: "color",
        },
        properties
    );
}

export function FileInput(properties: InputProps) {
    return CustomElement(
        "input",
        Classes.FILE_INPUT,
        {
            type: "file",
        },
        properties
    );
}
