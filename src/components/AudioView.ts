import { CustomElement } from "../core";
import { Classes } from "../core";

export function AudioView(
    properties: React.HTMLAttributes<HTMLAudioElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "audio",
        Classes.AUDIO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}
