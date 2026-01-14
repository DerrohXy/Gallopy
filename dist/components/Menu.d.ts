import React from "react";
type MenuProps = React.HTMLAttributes<HTMLDivElement> & {
    menuItems?: Array<any>;
    title: any;
    dropdownStyle?: React.CSSProperties;
    open?: boolean;
};
export declare function Menu(properties: MenuProps): React.JSX.Element;
export type MenuBarProps = React.HTMLAttributes<HTMLDivElement>;
export declare function MenuBar(properties: MenuBarProps, ...menus: Array<any>): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type MenuItemProps = React.HTMLAttributes<HTMLDivElement>;
export declare function MenuItem(properties: MenuItemProps, ...children: Array<any>): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export {};
//# sourceMappingURL=Menu.d.ts.map