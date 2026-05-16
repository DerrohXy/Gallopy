import { Classes, RemoveFields, LoadContent, LoadDefaultProperties, } from "../core";
import React from "react";
function closeIcon_() {
    return (React.createElement("div", { style: {
            padding: "10px",
            margin: "5px",
        } }, "<"));
}
function openIcon_() {
    return (React.createElement("div", { style: {
            padding: "10px",
            margin: "5px",
        } }, ">"));
}
function CollapseView_(properties) {
    let defaultState = {
        open: properties.open === true ? true : false,
    };
    let [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        title: "...",
        titleBarStyle: {},
        contentStyle: {},
        content: null,
        onCollapse: () => { },
    }, properties);
    let iconStyle = { fontSize: "20px", margin: "3px" };
    return (React.createElement("div", Object.assign({ className: (props.className || "") + " " + Classes.COLLAPSE_VIEW }, RemoveFields(props, [
        "className",
        "class",
        "content",
        "title",
        "titleBarStyle",
        "contentStyle",
        "onCollapse",
        "open",
        "closeIcon",
        "openIcon",
    ])),
        React.createElement("div", { className: state.open
                ? Classes.COLLAPSE_VIEW_TITLE_BAR_ACTIVE
                : Classes.COLLAPSE_VIEW_TITLE_BAR, onClick: (event) => {
                var _a;
                event.stopPropagation();
                (_a = props.onCollapse) === null || _a === void 0 ? void 0 : _a.call(props, !state.open);
                setState({ open: !state.open });
            }, style: props.titleBarStyle },
            props.title,
            state.open
                ? props.closeIcon || closeIcon_()
                : props.openIcon || openIcon_()),
        !state.open ? null : (React.createElement("div", { className: Classes.COLLAPSE_VIEW_CONTENT, style: props.contentStyle }, ...LoadContent(props.childContent)))));
}
export function CollapseView(properties) {
    return React.createElement(CollapseView_, Object.assign({}, properties));
}
//# sourceMappingURL=CollapseView.js.map