import { Classes, RemoveFields, LoadContent, LoadDefaultProperties, CustomEvents, } from "../core";
import React from "react";
function menuIcon_() {
    return (React.createElement("div", { style: {
            padding: "15px",
            margin: "5px",
        } }, ">"));
}
function NavigationBar_(properties) {
    let defaultState = {
        drawerOpen: false,
        menuOpen: false,
    };
    let [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        drawerContent: null,
        menuContent: null,
        content: null,
        drawerButton: null,
        menuButton: null,
        navigationWindowStyle: {},
        drawerWindowStyle: {},
        menuWindowStyle: {},
    }, properties);
    let [initialized, setInitialized] = React.useState(false);
    React.useEffect(() => {
        if (initialized === true) {
            return;
        }
        window.addEventListener(CustomEvents.CLOSE_DRAWERS_REQUEST, () => {
            setState({
                drawerOpen: false,
                menuOpen: false,
            });
        });
        setInitialized(true);
    });
    let drawerContent = LoadContent(props.drawerContent), menuContent = LoadContent(props.menuContent), drawerIcon = props.drawerIcon, menuIcon = props.menuIcon, content = LoadContent(props.childContent || props.children || []);
    let iconStyle = { fontSize: "35px", margin: "5px" };
    return (React.createElement("div", Object.assign({ className: (props.className || "") + " " + Classes.NAVIGATION_BAR }, RemoveFields(props, [
        "className",
        "class",
        "drawerContent",
        "menuContent",
        "content",
        "drawerButton",
        "menuButton",
        "navigationWindowStyle",
        "drawerWindowStyle",
        "menuWindowStyle",
    ])),
        drawerContent.length < 1 ? null : (React.createElement("div", { onClick: (event) => {
                event.stopPropagation();
                setState({
                    drawerOpen: !state.drawerOpen,
                    menuOpen: state.menuOpen,
                });
            } }, !drawerIcon ? menuIcon_() : drawerIcon)),
        ...content,
        menuContent.length < 1 ? null : (React.createElement("div", { onClick: (event) => {
                event.stopPropagation();
                setState({
                    drawerOpen: state.drawerOpen,
                    menuOpen: !state.menuOpen,
                });
            } }, !menuIcon ? menuIcon_() : menuIcon)),
        (drawerContent.length < 1 && menuContent.length < 1) ||
            (!state.drawerOpen && !state.menuOpen) ? null : (React.createElement("div", { className: Classes.NAVIGATION_BAR_NAVIGATION_WINDOW, onClick: (event) => {
                event.stopPropagation();
                setState({
                    menuOpen: false,
                    drawerOpen: false,
                });
            }, style: props.navigationWindowStyle },
            !state.drawerOpen ? null : (React.createElement("div", { className: Classes.NAVIGATION_BAR_DRAWER_WINDOW, onClick: (event) => {
                    event.stopPropagation();
                }, style: props.drawerWindowStyle }, ...drawerContent)),
            !state.menuOpen ? null : (React.createElement("div", { className: Classes.NAVIGATION_BAR_MENU_WINDOW, onClick: (event) => {
                    event.stopPropagation();
                }, style: props.menuWindowStyle }, ...menuContent))))));
}
export function NavigationBar(properties) {
    return React.createElement(NavigationBar_, Object.assign({}, properties));
}
//# sourceMappingURL=NavigationBar.js.map