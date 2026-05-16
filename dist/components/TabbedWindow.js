import { Classes, RemoveFields, LoadDefaultProperties } from "../core";
import React from "react";
function TabbedWindow_(properties) {
    let defaultState = {
        currentTabIndex: properties.currentTabIndex || 0,
    };
    let [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        content: null,
        titleBarStyle: {},
        titleStyle: {},
        contentStyle: {},
        onTabSelection: () => { },
    }, properties);
    let titleBarClass = {
        left: Classes.TABBED_WINDOW_TITLE_BAR,
        center: Classes.TABBED_WINDOW_TITLE_BAR_CENTERED,
        right: Classes.TABBED_WINDOW_TITLE_BAR_RIGHT,
    }[props.tabsLocation || "left"];
    let currentTab = props.tabs.length > 0 ? props.tabs[state.currentTabIndex] : null;
    return (React.createElement("div", Object.assign({ className: (props.className || "") +
            " " +
            (props.vertical
                ? Classes.VERTICAL_TABBED_WINDOW
                : Classes.TABBED_WINDOW) }, RemoveFields(props, [
        "className",
        "class",
        "tabs",
        "vertical",
        "titleBarStyle",
        "titleStyle",
        "contentStyle",
        "tabsLocation",
        "onTabSelection",
        "currentTabIndex",
    ])),
        React.createElement("div", { className: props.vertical
                ? Classes.VERTICAL_TABBED_WINDOW_TITLE_BAR
                : titleBarClass, style: props.titleBarStyle }, ...props.tabs.map((tab, index) => {
            return (React.createElement("div", { className: index === state.currentTabIndex
                    ? Classes.TABBED_WINDOW_TITLE_ACTIVE
                    : Classes.TABBED_WINDOW_TITLE, onClick: (event) => {
                    var _a;
                    event.stopPropagation();
                    setState({ currentTabIndex: index });
                    (_a = props.onTabSelection) === null || _a === void 0 ? void 0 : _a.call(props, index);
                }, style: props.titleStyle }, tab.title));
        })),
        React.createElement("div", { className: Classes.TABBED_WINDOW_CONTENT, style: props.contentStyle }, currentTab ? currentTab.childContent : null)));
}
export function TabbedWindow(properties) {
    return React.createElement(TabbedWindow_, Object.assign({}, properties));
}
//# sourceMappingURL=TabbedWindow.js.map