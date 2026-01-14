import React from "react";
export type NavigationBarState = {
    drawerOpen: boolean;
    menuOpen: boolean;
    [key: string]: any;
};
export type NavigationBarProps = React.HTMLAttributes<HTMLDivElement> & {
    drawerContent?: any;
    menuContent?: any;
    content?: Array<any> | any;
    drawerIcon?: any;
    menuIcon?: any;
    navigationWindowStyle?: React.CSSProperties;
    drawerWindowStyle?: React.CSSProperties;
    menuWindowStyle?: React.CSSProperties;
};
export declare function NavigationBar(properties: NavigationBarProps): React.JSX.Element;
//# sourceMappingURL=NavigationBar.d.ts.map