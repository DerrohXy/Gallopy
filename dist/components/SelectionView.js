import { Classes, RemoveFields, LoadDefaultProperties, CustomEvents, } from "../core";
import React from "react";
function SelectionView_(properties) {
    let defaultSelection = {};
    let [open, setOpen] = React.useState(false);
    let [selection, setSelection] = React.useState(defaultSelection), props = LoadDefaultProperties({
        optionItems: [],
        onSelection: () => { },
        dropdownStyle: {},
        optionItemStyle: {},
    }, properties);
    let [initialized, setInitialized] = React.useState(false);
    React.useEffect(() => {
        if (initialized === true) {
            // return;
        }
        window.addEventListener(CustomEvents.WINDOW_CLICK, () => {
            if (open === true) {
                setOpen(false);
            }
        });
        window.addEventListener(CustomEvents.WINDOW_SCROLL, () => {
            if (open === true) {
                setOpen(false);
            }
        });
        // setInitialized(true);
    });
    return (React.createElement("div", Object.assign({ className: (props.className || "") +
            " " +
            (open ? Classes.SELECTION_VIEW_ACTIVE : Classes.SELECTION_VIEW), onClick: (event) => {
            event.stopPropagation();
            setOpen(!open);
        } }, RemoveFields(props, [
        "className",
        "optionItems",
        "onSelection",
        "dropdownStyle",
        "optionItemStyle",
    ])),
        (selection === null || selection === void 0 ? void 0 : selection.text) || "Select",
        !open ? null : (React.createElement("div", { className: Classes.SELECTION_VIEW_DROPDOWN, style: props.dropdownStyle }, ...props.optionItems.map((item) => {
            return (React.createElement("div", { className: Classes.OPTION_ITEM, style: props.optionItemStyle, onClick: (event) => {
                    event.stopPropagation();
                    setSelection(item);
                    props.onSelection(item);
                } }, selection.content ||
                selection.text ||
                "Option"));
        })))));
}
export function SelectionView(properties) {
    return React.createElement(SelectionView_, Object.assign({}, properties));
}
//# sourceMappingURL=SelectionView.js.map