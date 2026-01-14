import React from "react";
export type SwitchState = {
    active: boolean;
    [key: string]: any;
};
export type SwitchProps = React.HTMLAttributes<HTMLDivElement> & {
    onActiveChange: Function;
    active?: boolean;
};
export declare function Switch(properties: SwitchProps): React.JSX.Element;
export type CheckButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    onCheckedChange: Function;
    text: string;
    checked?: boolean;
};
export type CheckButtonState = {
    checked: boolean;
    [key: string]: any;
};
export declare function CheckButton(properties: CheckButtonProps): React.JSX.Element;
export type RadioGroupItem = {
    value: any;
    text: any;
};
export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange: Function;
    radioButtonStyle?: React.CSSProperties;
};
export type RadioGroupState = {
    checked?: RadioGroupItem;
    [key: string]: any;
};
export declare function RadioGroup(properties: RadioGroupProps): React.JSX.Element;
//# sourceMappingURL=Controls.d.ts.map