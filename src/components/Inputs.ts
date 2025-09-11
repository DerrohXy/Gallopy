import { CustomElement } from "../core";
import { Classes } from "../core";

export function TextInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.TEXT_INPUT,
        {
            type: "text",
        },
        properties
    );
}

export function NumberInput(
    properties: React.HTMLAttributes<HTMLInputElement>
) {
    return CustomElement(
        "input",
        Classes.NUMBER_INPUT,
        {
            type: "number",
        },
        properties
    );
}

export function WeekInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.WEEK_INPUT,
        {
            type: "week",
        },
        properties
    );
}

export function TimeInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.TIME_INPUT,
        {
            type: "time",
        },
        properties
    );
}

export function MonthInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.MONTH_INPUT,
        {
            type: "month",
        },
        properties
    );
}

export function DatetimeInput(
    properties: React.HTMLAttributes<HTMLInputElement>
) {
    return CustomElement(
        "input",
        Classes.DATETIME_INPUT,
        {
            type: "datetime-local",
        },
        properties
    );
}

export function DateInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.DATE_INPUT,
        {
            type: "date",
        },
        properties
    );
}

export function TextArea(
    properties: React.HTMLAttributes<HTMLTextAreaElement>
) {
    return CustomElement(
        "textarea",
        Classes.TEXT_AREA,
        {
            rows: 5,
        },
        properties
    );
}

export function PasswordInput(
    properties: React.HTMLAttributes<HTMLInputElement>
) {
    return CustomElement(
        "input",
        Classes.PASSWORD_INPUT,
        {
            type: "password",
        },
        properties
    );
}

export function ColorInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.COLOR_INPUT,
        {
            type: "color",
        },
        properties
    );
}

export function FileInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.FILE_INPUT,
        {
            type: "file",
        },
        properties
    );
}
