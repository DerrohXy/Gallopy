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

export type SpinningLoaderProps = React.HTMLAttributes<HTMLDivElement>;

export function SpinningLoader(properties: SpinningLoaderProps) {
    return CustomElement("div", Classes.SPINNING_LOADER, {}, properties);
}
