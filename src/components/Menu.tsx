import {
    Classes,
    GetUniqueId,
    RemoveFields,
    CustomElement,
    LoadDefaultProperties,
    CustomEvents,
} from "../core";
import React from "react";

type MenuProps = React.HTMLAttributes<HTMLDivElement> & {
    menuItems?: Array<any>;
    title: any;
    dropdownStyle?: React.CSSProperties;
    open?: boolean;
};

type MenuState = {
    open: boolean;
    [key: string]: any;
};

function Menu_(properties: MenuProps) {
    let defaultState: MenuState = {
        open: properties.open === true ? true : false,
    };

    let elementId = GetUniqueId(),
        [state, setState] = React.useState(defaultState),
        props: MenuProps = LoadDefaultProperties(
            {
                menuItems: [],
                title: "Menu",
                dropdownStyle: {},
                onDropdown: () => {},
            },
            properties
        ) as MenuProps,
        toggle = () => {
            if (state.open !== true) {
                window.dispatchEvent(
                    new CustomEvent(CustomEvents.CLOSE_MENU_REQUEST, {
                        detail: elementId,
                    })
                );
            }
            setState({
                open: !state.open,
            });
        };
    let [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        if (initialized === true) {
            // return;
        }
        window.addEventListener(CustomEvents.WINDOW_CLICK, () => {
            if (state.open === true) {
                setState({
                    open: false,
                });
            }
        });
        window.addEventListener(CustomEvents.WINDOW_SCROLL, () => {
            if (state.open === true) {
                setState({
                    open: false,
                });
            }
        });
        window.addEventListener(
            CustomEvents.CLOSE_MENU_REQUEST,
            (event: CustomEventInit) => {
                if (event.detail.elementId !== elementId) {
                    if (state.open === true) {
                        setState({
                            open: false,
                        });
                    }
                }
            }
        );
        // setInitialized(true);
    });

    let children = props.menuItems || props.children || [];

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (state.open ? Classes.MENU_ACTIVE : Classes.MENU)
            }
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
                setState({ open: !state.open });
            }}
            {...RemoveFields(props, [
                "className",
                "class",
                "menuItems",
                "title",
                "dropdownStyle",
            ])}
        >
            {props.title}
            {!state.open ? null : (
                <div
                    className={Classes.MENU_DROPDOWN}
                    style={props.dropdownStyle}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

export function Menu(properties: MenuProps) {
    return <Menu_ {...properties} />;
}

export function MenuBar(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...menus: Array<any>
) {
    return CustomElement("div", Classes.MENU_BAR, {}, properties, ...menus);
}

export function MenuItem(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement("div", Classes.MENU_ITEM, {}, properties, ...children);
}
