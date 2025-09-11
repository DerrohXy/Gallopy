import { CustomElement } from "../core";
import { Classes } from "../core";

export function VideoView(
    properties: React.HTMLAttributes<HTMLVideoElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "video",
        Classes.VIDEO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}
