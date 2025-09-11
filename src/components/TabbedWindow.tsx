import { Classes, RemoveFields, LoadDefaultProperties } from "../core";
import React from "react";

type TabLocation = "left" | "right" | "center";

type TabbedWindowProps = React.HTMLAttributes<HTMLDivElement> & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    tabsLocation?: TabLocation;
    onTabSelection?: Function;
    currentTabIndex?: number;
};

type TabbedWindowState = {
    currentTabIndex: number;
    [key: string]: any;
};

type TabbedWindowTab = {
    title: any;
    content: any;
};

function TabbedWindow_(properties: TabbedWindowProps) {
    let defaultState: TabbedWindowState = {
        currentTabIndex: properties.currentTabIndex || 0,
    };

    let [state, setState] = React.useState(defaultState),
        props: TabbedWindowProps = LoadDefaultProperties(
            {
                content: null,
                titleBarStyle: {},
                titleStyle: {},
                contentStyle: {},
                onTabSelection: () => {},
            },
            properties
        ) as TabbedWindowProps;

    let titleBarClass: string = {
        left: Classes.TABBED_WINDOW_TITLE_BAR,
        center: Classes.TABBED_WINDOW_TITLE_BAR_CENTERED,
        right: Classes.TABBED_WINDOW_TITLE_BAR_RIGHT,
    }[props.tabsLocation || "left"];

    let currentTab: TabbedWindowTab | null =
        props.tabs.length > 0 ? props.tabs[state.currentTabIndex] : null;

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (props.vertical
                    ? Classes.VERTICAL_TABBED_WINDOW
                    : Classes.TABBED_WINDOW)
            }
            {...RemoveFields(props, [
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
            ])}
        >
            <div
                className={
                    props.vertical
                        ? Classes.VERTICAL_TABBED_WINDOW_TITLE_BAR
                        : titleBarClass
                }
                style={props.titleBarStyle}
            >
                {...props.tabs.map((tab, index) => {
                    return (
                        <div
                            className={
                                index === state.currentTabIndex
                                    ? Classes.TABBED_WINDOW_TITLE_ACTIVE
                                    : Classes.TABBED_WINDOW_TITLE
                            }
                            onClick={(
                                event: React.MouseEvent<
                                    HTMLDivElement,
                                    MouseEvent
                                >
                            ) => {
                                event.stopPropagation();
                                setState({ currentTabIndex: index });
                                props.onTabSelection?.(index);
                            }}
                            style={props.titleStyle}
                        >
                            {tab.title}
                        </div>
                    );
                })}
            </div>
            <div
                className={Classes.TABBED_WINDOW_CONTENT}
                style={props.contentStyle}
            >
                {currentTab ? currentTab.content : null}
            </div>
        </div>
    );
}

export function TabbedWindow(properties: TabbedWindowProps) {
    return <TabbedWindow_ {...properties} />;
}
