import React from "react";
export type TabLocation = "left" | "right" | "center";
export type TabbedWindowProps = React.HTMLAttributes<HTMLDivElement> & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    tabsLocation?: TabLocation;
    onTabSelection?: Function;
    currentTabIndex?: number;
};
export type TabbedWindowState = {
    currentTabIndex: number;
    [key: string]: any;
};
export type TabbedWindowTab = {
    title: any;
    content: any;
};
export declare function TabbedWindow(properties: TabbedWindowProps): React.JSX.Element;
//# sourceMappingURL=TabbedWindow.d.ts.map