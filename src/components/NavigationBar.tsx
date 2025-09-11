import {
    Classes,
    RemoveFields,
    LoadContent,
    LoadDefaultProperties,
    CustomEvents,
} from "../core";
import React from "react";
import { BiMenu } from "react-icons/bi";

type NavigationBarState = {
    drawerOpen: boolean;
    menuOpen: boolean;
    [key: string]: any;
};

type NavigationBarProps = React.HTMLAttributes<HTMLDivElement> & {
    drawerContent?: any;
    menuContent?: any;
    content?: Array<any> | any;
    drawerButton?: any;
    menuButton?: any;
    navigationWindowStyle?: React.CSSProperties;
    drawerWindowStyle?: React.CSSProperties;
    menuWindowStyle?: React.CSSProperties;
};

function NavigationBar_(properties: NavigationBarProps) {
    let defaultState: NavigationBarState = {
        drawerOpen: false,
        menuOpen: false,
    };

    let [state, setState] = React.useState(defaultState),
        props: NavigationBarProps = LoadDefaultProperties(
            {
                drawerContent: null,
                menuContent: null,
                content: null,
                drawerButton: null,
                menuButton: null,
                navigationWindowStyle: {},
                drawerWindowStyle: {},
                menuWindowStyle: {},
            },
            properties
        );
    let [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        if (initialized === true) {
            return;
        }
        window.addEventListener(CustomEvents.CLOSE_DRAWERS_REQUEST, () => {
            setState({
                drawerOpen: false,
                menuOpen: false,
            });
        });
        setInitialized(true);
    });

    let drawerContent: Array<any> = LoadContent(props.drawerContent),
        menuContent: Array<any> = LoadContent(props.menuContent),
        drawerButton: any | undefined = props.drawerButton,
        menuButton: any | undefined = props.menuButton,
        content: Array<any> = LoadContent(
            props.content || props.children || []
        );

    let iconStyle = { fontSize: "35px", margin: "5px" };

    return (
        <div
            className={(props.className || "") + " " + Classes.NAVIGATION_BAR}
            {...RemoveFields(props, [
                "className",
                "class",
                "drawerContent",
                "menuContent",
                "content",
                "drawerButton",
                "menuButton",
                "navigationWindowStyle",
                "drawerWindowStyle",
                "menuWindowStyle",
            ])}
        >
            {drawerContent.length < 1 ? null : (
                <div
                    onClick={(
                        event: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                        event.stopPropagation();
                        setState({
                            drawerOpen: !state.drawerOpen,
                            menuOpen: state.menuOpen,
                        });
                    }}
                >
                    {!drawerButton ? (
                        <BiMenu style={iconStyle}></BiMenu>
                    ) : (
                        drawerButton
                    )}
                </div>
            )}
            {...content}
            {menuContent.length < 1 ? null : (
                <div
                    onClick={(
                        event: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                        event.stopPropagation();
                        setState({
                            drawerOpen: state.drawerOpen,
                            menuOpen: !state.menuOpen,
                        });
                    }}
                >
                    {!menuButton ? (
                        <BiMenu style={iconStyle}></BiMenu>
                    ) : (
                        menuButton
                    )}
                </div>
            )}
            {(drawerContent.length < 1 && menuContent.length < 1) ||
            (!state.drawerOpen && !state.menuOpen) ? null : (
                <div
                    className={Classes.NAVIGATION_BAR_NAVIGATION_WINDOW}
                    onClick={(
                        event: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                        event.stopPropagation();
                        setState({
                            menuOpen: false,
                            drawerOpen: false,
                        });
                    }}
                    style={props.navigationWindowStyle}
                >
                    {!state.drawerOpen ? null : (
                        <div
                            className={Classes.NAVIGATION_BAR_DRAWER_WINDOW}
                            onClick={(
                                event: React.MouseEvent<
                                    HTMLDivElement,
                                    MouseEvent
                                >
                            ) => {
                                event.stopPropagation();
                            }}
                            style={props.drawerWindowStyle}
                        >
                            {...drawerContent}
                        </div>
                    )}
                    {!state.menuOpen ? null : (
                        <div
                            className={Classes.NAVIGATION_BAR_MENU_WINDOW}
                            onClick={(
                                event: React.MouseEvent<
                                    HTMLDivElement,
                                    MouseEvent
                                >
                            ) => {
                                event.stopPropagation();
                            }}
                            style={props.menuWindowStyle}
                        >
                            {...menuContent}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export function NavigationBar(properties: NavigationBarProps) {
    return <NavigationBar_ {...properties} />;
}
