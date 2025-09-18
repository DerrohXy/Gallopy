import { CustomElement } from "../core";
import { Classes } from "../core";

export type SliderProps = React.HTMLAttributes<HTMLInputElement>;

export function Slider(properties: SliderProps) {
    return CustomElement(
        "input",
        Classes.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export type ProgressBarProps = React.HTMLAttributes<HTMLProgressElement>;

export function ProgressBar(properties: ProgressBarProps) {
    return CustomElement("progress", Classes.PROGRESS_BAR, {}, properties);
}

export type ProgressIndicatorProps = React.HTMLAttributes<HTMLDivElement>;

export function ProgressIndicator(properties: ProgressIndicatorProps) {
    return CustomElement("div", Classes.PROGRESS_INDICATOR, {}, properties);
}
