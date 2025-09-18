import { CustomElement } from "../core";
import { Classes } from "../core";

export type VideoViewProps = React.HTMLAttributes<HTMLVideoElement>;

export function VideoView(properties: VideoViewProps, ...children: Array<any>) {
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
