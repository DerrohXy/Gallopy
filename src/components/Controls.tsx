import {
    Classes,
    RemoveFields,
    CustomElement,
    LoadDefaultProperties,
    CustomEvents,
} from "../core";
import React from "react";

type SwitchState = {
    active: boolean;
    [key: string]: any;
};

type SwitchProps = React.HTMLAttributes<HTMLDivElement> & {
    onActiveChange: Function;
    active?: boolean;
};

export function Switch(properties: SwitchProps) {
    let defaultState: SwitchState = {
        active: properties.active === true ? true : false,
    };

    let [state, setState] = React.useState(defaultState),
        props: SwitchProps = LoadDefaultProperties(
            {
                onActiveChange: () => {},
            },
            properties
        ) as SwitchProps;

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (state.active ? Classes.SWITCH_ACTIVE : Classes.SWITCH)
            }
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event?.stopPropagation();
                setState({ active: !state.active });
            }}
            {...RemoveFields(props, ["className", "onActiveChange", "active"])}
        >
            <div
                className={
                    state.active
                        ? Classes.SWITCH_TOGGLE_ACTIVE
                        : Classes.SWITCH_TOGGLE
                }
            ></div>
        </div>
    );
}

type CheckButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    onCheckedChange: Function;
    text: string;
    checked?: boolean;
};

type CheckButtonState = {
    checked: boolean;
    [key: string]: any;
};

export function CheckButton(properties: CheckButtonProps) {
    let defaultState: CheckButtonState = {
        checked: properties.checked === true ? true : false,
    };

    let [state, setState] = React.useState(defaultState),
        props: CheckButtonProps = LoadDefaultProperties(
            {
                text: "Check",
                onCheckedChange: () => {},
            },
            properties
        ) as CheckButtonProps;

    return (
        <div
            className={(props.className || "") + " " + Classes.CHECK_BUTTON}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
                setState({ checked: !state.checked });
            }}
            {...RemoveFields(props, [
                "className",
                "class",
                "onCheckedChange",
                "text",
                "checked",
            ])}
        >
            <div
                className={
                    state.checked
                        ? Classes.CHECK_BUTTON_CHECK_BOX_CHECKED
                        : Classes.CHECK_BUTTON_CHECK_BOX
                }
            ></div>
            {props.text}
        </div>
    );
}

type RadioGroupItem = {
    value: any;
    text: any;
};

type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange: Function;
    radioButtonStyle?: React.CSSProperties;
};

type RadioGroupState = {
    checked?: RadioGroupItem;
    [key: string]: any;
};

export function RadioGroup(properties: RadioGroupProps) {
    let defaultState: RadioGroupState = {
        checked: {
            text: "",
            value: "",
        },
    };

    let [state, setState] = React.useState(defaultState),
        props: RadioGroupProps = LoadDefaultProperties(
            {
                radioItems: [],
                vertical: false,
                onCheckedChange: () => {},
                radioButtonStyle: {},
            },
            properties
        ) as RadioGroupProps;

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (props.vertical
                    ? Classes.VERTICAL_RADIO_GROUP
                    : Classes.RADIO_GROUP)
            }
            {...RemoveFields(props, [
                "className",
                "class",
                "radioItems",
                "vertical",
                "onCheckedChange",
                "radioButtonStyle",
            ])}
        >
            {...props.radioItems.map((item) => {
                return (
                    <div
                        className={Classes.RADIO_BUTTON}
                        onClick={(
                            event: React.MouseEvent<HTMLDivElement, MouseEvent>
                        ) => {
                            event.stopPropagation();
                            setState({ checked: item });
                        }}
                        style={props.radioButtonStyle}
                    >
                        <div
                            className={
                                item.value == state.checked?.value
                                    ? Classes.RADIO_BUTTON_CHECK_BOX_CHECKED
                                    : Classes.RADIO_BUTTON_CHECK_BOX
                            }
                        ></div>
                        {item.text}
                    </div>
                );
            })}
        </div>
    );
}
