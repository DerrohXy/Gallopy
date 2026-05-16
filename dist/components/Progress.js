import { CustomElement } from "../core";
import { Classes } from "../core";
export function Slider(properties) {
    return CustomElement("input", Classes.SLIDER, {
        type: "range",
    }, properties);
}
export function ProgressBar(properties) {
    return CustomElement("progress", Classes.PROGRESS_BAR, {}, properties);
}
export function SpinningLoader(properties) {
    return CustomElement("div", Classes.SPINNING_LOADER, {}, properties);
}
//# sourceMappingURL=Progress.js.map