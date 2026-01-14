import React from "react";
export type SelectionViewOptionItem = {
    text?: string;
    content?: any;
};
export type SelectionViewProps = React.HTMLAttributes<HTMLDivElement> & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: React.CSSProperties;
    optionItemStyle?: React.CSSProperties;
};
export declare function SelectionView(properties: SelectionViewProps): React.JSX.Element;
//# sourceMappingURL=SelectionView.d.ts.map