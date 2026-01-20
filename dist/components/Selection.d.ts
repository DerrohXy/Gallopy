export type SelectProps = React.HTMLAttributes<HTMLSelectElement>;
export declare function Select(properties: SelectProps, ...options: Array<any>): import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type OptionProps = React.HTMLAttributes<HTMLOptionElement> & {
    text?: string;
    value?: string;
    selected?: boolean;
    disabled?: boolean;
};
export declare function Option(properties: OptionProps): import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//# sourceMappingURL=Selection.d.ts.map