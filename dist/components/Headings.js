import { CustomElement } from "../core";
import { Classes } from "../core";
export function Heading1(properties) {
    return CustomElement("h1", Classes.HEADING, {}, properties, properties.text);
}
export function Heading2(properties) {
    return CustomElement("h2", Classes.HEADING, {}, properties, properties.text);
}
export function Heading3(properties) {
    return CustomElement("h3", Classes.HEADING, {}, properties, properties.text);
}
export function Heading4(properties) {
    return CustomElement("h4", Classes.HEADING, {}, properties, properties.text);
}
export function Heading5(properties) {
    return CustomElement("h5", Classes.HEADING, {}, properties, properties.text);
}
export function Heading6(properties) {
    return CustomElement("h6", Classes.HEADING, {}, properties, properties.text);
}
//# sourceMappingURL=Headings.js.map