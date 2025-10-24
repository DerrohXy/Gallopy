import { CustomElement } from "../core";
import { Classes } from "../core";

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

export function Table(properties: TableProps, ...children: Array<any>) {
    return CustomElement("table", Classes.TABLE, {}, properties, ...children);
}

export type TableCellProps = React.HTMLAttributes<HTMLTableCellElement>;

export function TableHeading(
    properties: TableCellProps,
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
    properties: TableCellProps,
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

export function TableBody(properties: TableCellProps, ...children: Array<any>) {
    return CustomElement(
        "tbody",
        Classes.TABLE_BODY,
        {},
        properties,
        ...children
    );
}

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export function TableRow(properties: TableRowProps, ...children: Array<any>) {
    return CustomElement("tr", Classes.TABLE_ROW, {}, properties, ...children);
}

export function TableData(properties: TableCellProps, ...children: Array<any>) {
    return CustomElement("td", Classes.TABLE_DATA, {}, properties, ...children);
}

export function TableHeader(
    properties: TableCellProps,
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

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

export function TableCaption(
    properties: TableCaptionProps,
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
