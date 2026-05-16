import { Classes, GetUniqueId, RemoveFields, CustomElement, LoadDefaultProperties, CustomEvents, } from "../core";
import React from "react";
function Menu_(properties) {
    let defaultState = {
        open: properties.open === true ? true : false,
    };
    let elementId = GetUniqueId(), [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        menuItems: [],
        title: "Menu",
        dropdownStyle: {},
        onDropdown: () => { },
    }, properties), toggle = () => {
        if (state.open !== true) {
            window.dispatchEvent(new CustomEvent(CustomEvents.CLOSE_MENU_REQUEST, {
                detail: elementId,
            }));
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
        window.addEventListener(CustomEvents.CLOSE_MENU_REQUEST, (event) => {
            if (event.detail.elementId !== elementId) {
                if (state.open === true) {
                    setState({
                        open: false,
                    });
                }
            }
        });
        // setInitialized(true);
    });
    let children = props.menuItems || props.children || [];
    return (React.createElement("div", Object.assign({ className: (props.className || "") +
            " " +
            (state.open ? Classes.MENU_ACTIVE : Classes.MENU), onClick: (event) => {
            event.stopPropagation();
            setState({ open: !state.open });
        } }, RemoveFields(props, [
        "className",
        "class",
        "menuItems",
        "title",
        "dropdownStyle",
    ])),
        props.title,
        !state.open ? null : (React.createElement("div", { className: Classes.MENU_DROPDOWN, style: props.dropdownStyle }, children))));
}
export function Menu(properties) {
    return React.createElement(Menu_, Object.assign({}, properties));
}
export function MenuBar(properties, ...menus) {
    return CustomElement("div", Classes.MENU_BAR, {}, properties, ...menus);
}
export function MenuItem(properties, ...children) {
    return CustomElement("div", Classes.MENU_ITEM, {}, properties, ...children);
}
//# sourceMappingURL=Menu.js.map