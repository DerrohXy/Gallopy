import { CustomElement } from "../core";
import { Classes } from "../core";
export function VideoView(properties, ...children) {
    return CustomElement("video", Classes.VIDEO_VIEW, {
        controls: true,
    }, properties, ...children);
}
//# sourceMappingURL=VideoView.js.map