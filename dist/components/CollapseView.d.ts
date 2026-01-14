import React from "react";
export type CollapseViewProps = React.HTMLAttributes<HTMLDivElement> & {
    content?: Array<any> | any;
    title: any;
    titleBarStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: any;
    openIcon?: any;
};
export type CollabpseViewState = {
    open: boolean;
    [key: string]: any;
};
export declare function CollapseView(properties: CollapseViewProps): React.JSX.Element;
//# sourceMappingURL=CollapseView.d.ts.map