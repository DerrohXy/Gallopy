import { CustomElement } from "../core";
import { Classes } from "../core";
export function AudioView(properties, ...children) {
    return CustomElement("audio", Classes.AUDIO_VIEW, {
        controls: true,
    }, properties, ...children);
}
//# sourceMappingURL=AudioView.js.map