import { CustomElement } from "../core";
import { Classes } from "../core";

export type AudioViewProps = React.HTMLAttributes<HTMLAudioElement> & {
    src?: string;
};

export function AudioView(properties: AudioViewProps, ...children: Array<any>) {
    return CustomElement(
        "audio",
        Classes.AUDIO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children,
    );
}
