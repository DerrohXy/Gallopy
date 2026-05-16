import { Classes, RemoveFields, LoadDefaultProperties } from "../core";
import React from "react";
function Switch_(properties) {
    let defaultState = {
        active: properties.active === true ? true : false,
    };
    let [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        onActiveChange: () => { },
    }, properties);
    return (React.createElement("div", Object.assign({ className: (props.className || "") +
            " " +
            (state.active ? Classes.SWITCH_ACTIVE : Classes.SWITCH), onClick: (event) => {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            props.onActiveChange(!state.active);
            setState({ active: !state.active });
        } }, RemoveFields(props, ["className", "onActiveChange", "active"])),
        React.createElement("div", { className: state.active
                ? Classes.SWITCH_TOGGLE_ACTIVE
                : Classes.SWITCH_TOGGLE })));
}
export function Switch(properties) {
    return React.createElement(Switch_, Object.assign({}, properties));
}
function CheckButton_(properties) {
    let defaultState = {
        checked: properties.checked === true ? true : false,
    };
    let [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        text: "Check",
        onCheckedChange: () => { },
    }, properties);
    return (React.createElement("div", Object.assign({ className: (props.className || "") + " " + Classes.CHECK_BUTTON, onClick: (event) => {
            event.stopPropagation();
            props.onCheckedChange(!state.checked);
            setState({ checked: !state.checked });
        } }, RemoveFields(props, [
        "className",
        "class",
        "onCheckedChange",
        "text",
        "checked",
    ])),
        React.createElement("div", { className: state.checked
                ? Classes.CHECK_BUTTON_CHECK_BOX_CHECKED
                : Classes.CHECK_BUTTON_CHECK_BOX }),
        props.text));
}
export function CheckButton(properties) {
    return React.createElement(CheckButton_, Object.assign({}, properties));
}
function RadioGroup_(properties) {
    let defaultState = {
        checked: {
            text: "",
            value: "",
        },
    };
    let [state, setState] = React.useState(defaultState), props = LoadDefaultProperties({
        radioItems: [],
        vertical: false,
        onCheckedChange: () => { },
        radioButtonStyle: {},
    }, properties);
    return (React.createElement("div", Object.assign({ className: (props.className || "") +
            " " +
            (props.vertical
                ? Classes.VERTICAL_RADIO_GROUP
                : Classes.RADIO_GROUP) }, RemoveFields(props, [
        "className",
        "class",
        "radioItems",
        "vertical",
        "onCheckedChange",
        "radioButtonStyle",
    ])), ...props.radioItems.map((item) => {
        var _a;
        return (React.createElement("div", { className: Classes.RADIO_BUTTON, onClick: (event) => {
                event.stopPropagation();
                props.onCheckedChange(item);
                setState({ checked: item });
            }, style: props.radioButtonStyle },
            React.createElement("div", { className: item.value == ((_a = state.checked) === null || _a === void 0 ? void 0 : _a.value)
                    ? Classes.RADIO_BUTTON_CHECK_BOX_CHECKED
                    : Classes.RADIO_BUTTON_CHECK_BOX }),
            item.text));
    })));
}
export function RadioGroup(properties) {
    return React.createElement(RadioGroup_, Object.assign({}, properties));
}
//# sourceMappingURL=Controls.js.map