import { CustomElement } from "../core";
import { Classes } from "../core";

export function Slider(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement(
        "input",
        Classes.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export function ProgressBar(
    properties: React.HTMLAttributes<HTMLProgressElement>
) {
    return CustomElement("progress", Classes.PROGRESS_BAR, {}, properties);
}

export function ProgressIndicator(
    properties: React.HTMLAttributes<HTMLDivElement>
) {
    return CustomElement("div", Classes.PROGRESS_INDICATOR, {}, properties);
}
