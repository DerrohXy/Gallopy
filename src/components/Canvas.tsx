import { CustomElement } from "../core";
import { Classes } from "../core";

export type CanvasProps = React.HTMLAttributes<HTMLCanvasElement>;

export function Canvas(properties: CanvasProps) {
    return CustomElement("canvas", Classes.CANVAS, {}, properties);
}
