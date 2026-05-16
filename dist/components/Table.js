import { CustomElement } from "../core";
import { Classes } from "../core";
export function Table(properties, ...children) {
    return CustomElement("table", Classes.TABLE, {}, properties, ...children);
}
export function TableHeading(properties, ...children) {
    return CustomElement("thead", Classes.TABLE_HEADING, {}, properties, ...children);
}
export function TableFooter(properties, ...children) {
    return CustomElement("tfoot", Classes.TABLE_FOOTER, {}, properties, ...children);
}
export function TableBody(properties, ...children) {
    return CustomElement("tbody", Classes.TABLE_BODY, {}, properties, ...children);
}
export function TableRow(properties, ...children) {
    return CustomElement("tr", Classes.TABLE_ROW, {}, properties, ...children);
}
export function TableData(properties, ...children) {
    return CustomElement("td", Classes.TABLE_DATA, {}, properties, ...children);
}
export function TableHeader(properties, ...children) {
    return CustomElement("th", Classes.TABLE_HEADER, {}, properties, ...children);
}
export function TableCaption(properties, ...children) {
    return CustomElement("caption", Classes.CAPTION, {}, properties, ...children);
}
//# sourceMappingURL=Table.js.map