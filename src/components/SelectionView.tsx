import {
    Classes,
    RemoveFields,
    LoadDefaultProperties,
    CustomEvents,
} from "../core";
import React from "react";

export type SelectionViewOptionItem = {
    text?: string;
    content?: any;
};

export type SelectionViewProps = React.HTMLAttributes<HTMLDivElement> & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: React.CSSProperties;
    optionItemStyle?: React.CSSProperties;
};

function SelectionView_(properties: SelectionViewProps) {
    let defaultSelection: SelectionViewOptionItem | null = {};

    let [open, setOpen] = React.useState(false);
    let [selection, setSelection] = React.useState(defaultSelection),
        props: SelectionViewProps = LoadDefaultProperties(
            {
                optionItems: [],
                onSelection: () => {},
                dropdownStyle: {},
                optionItemStyle: {},
            },
            properties
        ) as SelectionViewProps;
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

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (open ? Classes.SELECTION_VIEW_ACTIVE : Classes.SELECTION_VIEW)
            }
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
                setOpen(!open);
            }}
            {...RemoveFields(props, [
                "className",
                "optionItems",
                "onSelection",
                "dropdownStyle",
                "optionItemStyle",
            ])}
        >
            {selection?.text || "Select"}
            {!open ? null : (
                <div
                    className={Classes.SELECTION_VIEW_DROPDOWN}
                    style={props.dropdownStyle}
                >
                    {...props.optionItems.map((item) => {
                        return (
                            <div
                                className={Classes.OPTION_ITEM}
                                style={props.optionItemStyle}
                                onClick={(
                                    event: React.MouseEvent<
                                        HTMLDivElement,
                                        MouseEvent
                                    >
                                ) => {
                                    event.stopPropagation();
                                    setSelection(item);
                                    props.onSelection(item);
                                }}
                            >
                                {selection.content ||
                                    selection.text ||
                                    "Option"}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export function SelectionView(properties: SelectionViewProps) {
    return <SelectionView_ {...properties} />;
}
