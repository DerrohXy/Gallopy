import { CustomElement } from "../core";
import { Classes } from "../core";

export function Table(
    properties: React.HTMLAttributes<HTMLTableElement>,
    ...children: Array<any>
) {
    return CustomElement("table", Classes.TABLE, {}, properties, ...children);
}

export function TableHeading(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "thead",
        Classes.TABLE_HEADING,
        {},
        properties,
        ...children
    );
}

export function TableFooter(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "tfoot",
        Classes.TABLE_FOOTER,
        {},
        properties,
        ...children
    );
}

export function TableBody(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "tbody",
        Classes.TABLE_BODY,
        {},
        properties,
        ...children
    );
}

export function TableRow(
    properties: React.HTMLAttributes<HTMLTableRowElement>,
    ...children: Array<any>
) {
    return CustomElement("tr", Classes.TABLE_ROW, {}, properties, ...children);
}

export function TableData(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement("td", Classes.TABLE_DATA, {}, properties, ...children);
}

export function TableHeader(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "th",
        Classes.TABLE_HEADER,
        {},
        properties,
        ...children
    );
}

export function Caption(
    properties: React.HTMLAttributes<HTMLTableCaptionElement>,
    ...children: Array<any>
) {
    return CustomElement(
        "caption",
        Classes.CAPTION,
        {},
        properties,
        ...children
    );
}
