import {
    Classes,
    RemoveFields,
    LoadContent,
    LoadDefaultProperties,
} from "../core";
import React from "react";

function closeIcon_() {
    return (
        <div
            style={{
                padding: "10px",
                margin: "5px",
            }}
        >
            {"<"}
        </div>
    );
}

function openIcon_() {
    return (
        <div
            style={{
                padding: "10px",
                margin: "5px",
            }}
        >
            {">"}
        </div>
    );
}

export type CollapseViewProps = React.HTMLAttributes<HTMLDivElement> & {
    content?: Array<any> | any;
    title: any;
    titleBarStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: any;
    openIcon?: any;
};

export type CollabpseViewState = {
    open: boolean;
    [key: string]: any;
};

function CollapseView_(properties: CollapseViewProps) {
    let defaultState: CollabpseViewState = {
        open: properties.open === true ? true : false,
    };

    let [state, setState] = React.useState(defaultState),
        props: CollapseViewProps = LoadDefaultProperties(
            {
                title: "...",
                titleBarStyle: {},
                contentStyle: {},
                content: null,
                onCollapse: () => {},
            },
            properties
        ) as CollapseViewProps;

    let iconStyle = { fontSize: "20px", margin: "3px" };

    return (
        <div
            className={(props.className || "") + " " + Classes.COLLAPSE_VIEW}
            {...RemoveFields(props, [
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
            ])}
        >
            <div
                className={
                    state.open
                        ? Classes.COLLAPSE_VIEW_TITLE_BAR_ACTIVE
                        : Classes.COLLAPSE_VIEW_TITLE_BAR
                }
                onClick={(
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) => {
                    event.stopPropagation();
                    props.onCollapse?.(!state.open);
                    setState({ open: !state.open });
                }}
                style={props.titleBarStyle}
            >
                {props.title}
                {state.open
                    ? props.closeIcon || closeIcon_()
                    : props.openIcon || openIcon_()}
            </div>
            {!state.open ? null : (
                <div
                    className={Classes.COLLAPSE_VIEW_CONTENT}
                    style={props.contentStyle}
                >
                    {...LoadContent(props.content)}
                </div>
            )}
        </div>
    );
}

export function CollapseView(properties: CollapseViewProps) {
    return <CollapseView_ {...properties} />;
}
