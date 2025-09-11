import { CustomElement } from "../core";
import { Classes } from "../core";

export function Canvas(properties: React.HTMLAttributes<HTMLCanvasElement>) {
    return CustomElement("canvas", Classes.CANVAS, {}, properties);
}
