import React from "react";
import { createRoot, Container } from "react-dom/client";
import {
    BiCaretDown,
    BiCaretUp,
    BiInfoSquare,
    BiMenu,
    BiXCircle,
} from "react-icons/bi";
import "./styles.css";

/**
 * Gets the dimension of the current window object.
 * @returns
 */
function GetWindowDimensions_() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}

/**
 * Gets domensions of an HTML element.
 * @param element The element itself.
 * @returns
 */
function GetElementDimensions_(element: HTMLElement) {
    return {
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        offsetTop: element.offsetTop,
        offsetLeft: element.offsetLeft,
    };
}

/**
 * Suposedly generates a unique string
 * @returns The unique string.
 */
function GetUniqueId_(): string {
    let x = 0;

    for (let q = 0; q < 10; ++q) {
        x += Date.now() * Math.random();
    }

    return x.toString().replace(".", "");
}

/**
 * Asserts values are provied as an array
 * @param content
 * @returns
 */
function LoadContent_(content: Array<any> | any): Array<any> {
    return !content ? [] : Array.isArray(content) ? content : [content];
}

function LoadDefaultProperties_(
    defaultProperties: { [key: string]: any },
    properties: { [key: string]: any }
) {
    return Object.assign(defaultProperties, properties);
}

/**
 * Removes specified field names from an object
 * @param object
 * @param fields
 * @returns
 */
function RemoveFields_(object: { [key: string]: any }, fields: Array<string>) {
    let newObject: { [key: string]: any } = {};

    Object.keys(object)
        .filter((field) => {
            return fields.includes(field) !== true;
        })
        .map((field) => {
            newObject[field] = object[field];
        });

    return newObject;
}

function Spread_(items: Array<any>): Array<any> {
    let spread: Array<any> = [];
    items.map((x) => {
        if (Array.isArray(x)) {
            spread = spread.concat(Spread_(x));
        } else {
            spread.push(x);
        }
    });

    return spread;
}

function CreateElement_(
    tag: any,
    properties: { [key: string]: any },
    ...children: Array<any>
) {
    return React.createElement(tag, properties, ...Spread_(children));
}

function Render_(component: React.ReactNode, element: Container) {
    return createRoot(element).render(component);
}

type RLStoreState = {
    [key: string]: any;
};

type RLStoreHandlers = {
    [key: string]: Function;
};

type RLStore = {
    state: RLStoreState;
    handlers: RLStoreHandlers;
    getState(): RLStoreState;
    setState(state: RLStoreState): void;
    subscribe(handler: Function): string;
    unsubscribe(handlerId: string): void;
};

function Store_(state: RLStoreState): RLStore {
    return {
        state: state,
        handlers: {},
        getState() {
            return this.state;
        },
        setState(state: RLStoreState) {
            this.state = {
                ...this.state,
                ...state,
            };
            Object.values(this.handlers).map((handler) => {
                handler(this.state);
            });
        },
        subscribe(handler: Function): string {
            let handlerId = GetUniqueId_();
            this.handlers[handlerId] = handler;
            return handlerId;
        },
        unsubscribe(handlerId: string) {
            delete this.handlers[handlerId];
        },
    };
}

const Colors_ = {
    ALICE_BLUE: "#F0F8FF",
    ANTIQUE_WHITE: "#FAEBD7",
    AQUA: "#00FFFF",
    AQUAMARINE: "#7FFFD4",
    AZURE: "#F0FFFF",
    BEIGE: "#F5F5DC",
    BISQUE: "#FFE4C4",
    BLACK: "#000000",
    BLACK1: "#77767B",
    BLACK2: "#5E5C64",
    BLACK3: "#3D3846",
    BLACK4: "#241F31",
    BLACK5: "#000000",
    BLANCHED_ALMOND: "#FFEBCD",
    BLUE: "#0000FF",
    BLUE1: "#99C1F1",
    BLUE2: "#62A0EA",
    BLUE3: "#3584E4",
    BLUE4: "#1C71D8",
    BLUE5: "#1A5FB4",
    BLUE_GREEN: "#9DF9EF",
    BLUE_VIOLET: "#8A2BE2",
    BRIGHT_BLUE: "#51E2F5",
    BROWN: "#A52A2A",
    BROWN1: "#CDAB8F",
    BROWN2: "#B5835A",
    BROWN3: "#986A44",
    BROWN4: "#865E3C",
    BROWN5: "#63452C",
    BURLY_WOOD: "#DEB887",
    BURNT_ORANGE: "#EE4E34",
    CADET_BLUE: "#5F9EA0",
    CHARCOAL: "#101820FF",
    CHARTREUSE: "#7FFF00",
    CHERRY_RED: "#990011FF",
    CHOCOLATE: "#D2691E",
    CLASSIC_BLUE: "#2F3C7E",
    CLASSIC_PINK: "#FBEAEB",
    CLASSIC_YELLOW: "#FEE715FF",
    CORAL: "#FF7F50",
    CORNFLOWER_BLUE: "#6495ED",
    CORNSILK: "#FFF8DC",
    CRIMSON: "#DC143C",
    CYAN: "#00FFFF",
    DARK_BLUE: "#00008B",
    DARK_CYAN: "#008B8B",
    DARK_GOLDEN_ROD: "#B8860B",
    DARK_GRAY: "#A9A9A9",
    DARK_GREEN: "#006400",
    DARK_GREY: "#A9A9A9",
    DARK_KHAKI: "#BDB76B",
    DARK_MAGENTA: "#8B008B",
    DARK_OLIVE_GREEN: "#556B2F",
    DARK_ORANGE: "#FF8C00",
    DARK_ORCHID: "#9932CC",
    DARK_RED: "#8B0000",
    DARK_SALMON: "#E9967A",
    DARK_SAND: "#A28089",
    DARK_SEA_GREEN: "#8FBC8F",
    DARK_SLATE_BLUE: "#483D8B",
    DARK_SLATE_GRAY: "#2F4F4F",
    DARK_SLATE_GREY: "#2F4F4F",
    DARK_TURQUOISE: "#00CED1",
    DARK_VIOLET: "#9400D3",
    DEEP_PINK: "#FF1493",
    DEEP_SKY_BLUE: "#00BFFF",
    DIM_GRAY: "#696969",
    DIM_GREY: "#696969",
    DODGER_BLUE: "#1E90FF",
    DUSTY_WHITE: "#EDF756",
    ELECTRIC_BLUE: "#4831D4",
    FIRE_BRICK: "#B22222",
    FLORAL_WHITE: "#FFFAF0",
    FOREST_GREEN: "#3A6B35",
    FREEZE_PURPLE: "#E5EAF5",
    FUCHSIA: "#FF00FF",
    GAINSBORO: "#DCDCDC",
    GHOST_WHITE: "#F8F8FF",
    GOLD: "#FFD700",
    GOLDEN_ROD: "#DAA520",
    GRAY: "#808080",
    GRAY1: "#FFFFFF",
    GRAY2: "#F6F5F4",
    GRAY3: "#DEDDDA",
    GRAY4: "#C0BFBC",
    GRAY5: "#9A9996",
    GREEN: "#008000",
    GREEN1: "#8FF0A4",
    GREEN2: "#57E3A9",
    GREEN3: "#33D17A",
    GREEN4: "#2EC27E",
    GREEN5: "#26A269",
    GREEN_YELLOW: "#ADFF2F",
    GREY: "#808080",
    HEAVY_PURPLE: "#A28089",
    HONEY_DEW: "#F0FFF0",
    HOT_PINK: "#FF69B4",
    ICE_COLD: "#A0D2EB",
    INDIAN_RED: "#CD5C5C",
    INDIGO: "#1E2761",
    ISLAND_GREEN: "#2BAE66FF",
    IVORY: "#FFFFF0",
    KHAKI: "#F0E68C",
    LAVENDER: "#E2D1F9",
    LAVENDER_BLUSH: "#FFF0F5",
    LAWN_GREEN: "#7CFC00",
    LEMON_CHIFFON: "#FFFACD",
    LIGHT_BLUE: "#ADD8E6",
    LIGHT_CORAL: "#F08080",
    LIGHT_CYAN: "#E0FFFF",
    LIGHT_GOLDEN_ROD_YELLOW: "#FAFAD2",
    LIGHT_GRAY: "#D3D3D3",
    LIGHT_GREEN: "#90EE90",
    LIGHT_GREY: "#D3D3D3",
    LIGHT_OLIVE: "#E7E8D1",
    LIGHT_PINK: "#FFB6C1",
    LIGHT_SALMON: "#FFA07A",
    LIGHT_SEA_GREEN: "#20B2AA",
    LIGHT_SKY_BLUE: "#87CEFA",
    LIGHT_SLATE_GRAY: "#778899",
    LIGHT_SLATE_GREY: "#778899",
    LIGHT_STEEL_BLUE: "#B0C4DE",
    LIGHT_TEAL: "#A7BEAE",
    LIGHT_YELLOW: "#FFFFE0",
    LIME: "#00FF00",
    LIME_GREEN: "#CCF381",
    LINEN: "#FAF0E6",
    MAGENTA: "#FF00FF",
    MAROON: "#7A2048",
    MEDIUM_AQUA_MARINE: "#66CDAA",
    MEDIUM_BLUE: "#0000CD",
    MEDIUM_ORCHID: "#BA55D3",
    MEDIUM_PURPLE: "#D0BDF4",
    MEDIUM_SEA_GREEN: "#3CB371",
    MEDIUM_SLATE_BLUE: "#7B68EE",
    MEDIUM_SPRING_GREEN: "#00FA9A",
    MEDIUM_TURQUOISE: "#48D1CC",
    MEDIUM_VIOLET_RED: "#C71585",
    MIDNIGHT_BLUE: "#191970",
    MINT_CREAM: "#F5FFFA",
    MISTY_ROSE: "#FFE4E1",
    MOCCASIN: "#FFE4B5",
    MUSTARD: "#E3B448",
    NAVAJO_WHITE: "#FFDEAD",
    NAVY: "#000080",
    OFF_WHITE: "#FCF6F5FF",
    OLD_LACE: "#FDF5E6",
    OLIVE: "#808000",
    OLIVE_DRAB: "#6B8E23",
    ORANGE: "#FFA500",
    ORANGE1: "#FFBE6F",
    ORANGE2: "#FFA348",
    ORANGE3: "#FF7800",
    ORANGE4: "#E66100",
    ORANGE5: "#C64600",
    ORANGE_RED: "#FF4500",
    ORCHID: "#DA70D6",
    PALE_GOLDEN_ROD: "#EEE8AA",
    PALE_GREEN: "#98FB98",
    PALE_TURQUOISE: "#AFEEEE",
    PALE_VIOLET_RED: "#DB7093",
    PAPAYA_WHIP: "#FFEFD5",
    PEACH: "#EEA47FFF",
    PEACH_PUFF: "#FFDAB9",
    PERU: "#CD853F",
    PINK: "#FFC0CB",
    PINK_SAND: "#FFA8B6",
    PLUM: "#DDA0DD",
    POWDER_BLUE: "#B0E0E6",
    PURPLE: "#800080",
    PURPLE1: "#DC8ADD",
    PURPLE2: "#C061CB",
    PURPLE3: "#9141AC",
    PURPLE4: "#813D9C",
    PURPLE5: "#613583",
    PURPLE_PAIN: "#8458B3",
    RASPBERRY: "#8A307F",
    REBECCA_PURPLE: "#663399",
    RED: "#FF0000",
    RED1: "#F66151",
    RED2: "#ED333B",
    RED3: "#E01B24",
    RED4: "#C01C28",
    RED5: "#A51D2D",
    ROSY_BROWN: "#BC8F8F",
    ROYAL_BLUE: "#00539CFF",
    SADDLE_BROWN: "#8B4513",
    SAGE: "#CBD18F",
    SALMON: "#FA8072",
    SANDY_BROWN: "#F4A460",
    SCARLET: "#B85042",
    SEA_GREEN: "#2E8B57",
    SEA_SHELL: "#FFF5EE",
    SIENNA: "#A0522D",
    SILVER: "#C0C0C0",
    SKY_BLUE: "#87CEEB",
    SLATE_BLUE: "#6A5ACD",
    SLATE_GRAY: "#708090",
    SLATE_GREY: "#708090",
    SNOW: "#FFFAFA",
    SPICED_APPLE: "#783937FF",
    SPRING_GREEN: "#00FF7F",
    STEEL_BLUE: "#4682B4",
    TAN: "#D2B48C",
    TEAL: "#317773",
    THISTLE: "#D8BFD8",
    TOMATO: "#FF6347",
    TURQUOISE: "#40E0D0",
    VERDANT_GREEN: "#2C5F2DFF",
    VIOLET: "#EE82EE",
    WHEAT: "#F5DEB3",
    WHITE: "#FFFFFF",
    WHITE1: "#9A9996",
    WHITE2: "#C0BFBC",
    WHITE3: "#DEDDDA",
    WHITE4: "#F6F5F4",
    WHITE5: "#FFFFFF",
    WHITE_SMOKE: "#F5F5F5",
    YELLOW: "#FFFF00",
    YELLOW1: "#F9F06B",
    YELLOW2: "#F8E45C",
    YELLOW3: "#F6D32D",
    YELLOW4: "#F5C211",
    YELLOW5: "#E5A50A",
    YELLOW_GREEN: "#9ACD32",
};

/**
 * CSS classes for animantion(type)
 */
type AnimationClasses = {
    PULSATING: string;
    SPINNING: string;
    SLIDE_IN_LEFT: string;
    SLIDE_IN_LEFT_SLOW: string;
    SLIDE_IN_LEFT_FAST: string;
    SLIDE_OUT_LEFT: string;
    SLIDE_OUT_LEFT_SLOW: string;
    SLIDE_OUT_LEFT_FAST: string;
    SLIDE_IN_RIGHT: string;
    SLIDE_IN_RIGHT_SLOW: string;
    SLIDE_IN_RIGHT_FAST: string;
    SLIDE_OUT_RIGHT: string;
    SLIDE_OUT_RIGHT_SLOW: string;
    SLIDE_OUT_RIGHT_FAST: string;
    SLIDE_IN_TOP: string;
    SLIDE_IN_TOP_SLOW: string;
    SLIDE_IN_TOP_FAST: string;
    SLIDE_OUT_TOP: string;
    SLIDE_OUT_TOP_FAST: string;
    SLIDE_OUT_TOP_SLOW: string;
    SLIDE_IN_BOTTOM: string;
    SLIDE_IN_BOTTOM_SLOW: string;
    SLIDE_IN_BOTTOM_FAST: string;
    SLIDE_OUT_BOTTOM: string;
    SLIDE_OUT_BOTTOM_SLOW: string;
    SLIDE_OUT_BOTTOM_FAST: string;
};

/**
 * Predefined custom component class names(type)
 */
type ComponentClasses = {
    HIDDEN: string;
    BUTTON: string;
    ICON_BUTTON: string;
    LABEL: string;
    PARAGRAPH: string;
    ICON: string;
    HEADING: string;
    LINK: string;
    IMAGE_VIEW: string;
    VIDEO_VIEW: string;
    AUDIO_VIEW: string;
    TEXT_INPUT: string;
    NUMBER_INPUT: string;
    WEEK_INPUT: string;
    TIME_INPUT: string;
    MONTH_INPUT: string;
    DATETIME_INPUT: string;
    DATE_INPUT: string;
    TEXT_AREA: string;
    PASSWORD_INPUT: string;
    COLOR_INPUT: string;
    FILE_INPUT: string;
    SELECTION: string;
    OPTION: string;
    SELECTION_VIEW: string;
    SELECTION_VIEW_ACTIVE: string;
    SELECTION_VIEW_DROPDOWN: string;
    OPTION_ITEM: string;
    PROGRESS_BAR: string;
    SLIDER: string;
    PROGRESS_INDICATOR: string;
    CHECK_BUTTON: string;
    CHECK_BUTTON_CHECK_BOX: string;
    CHECK_BUTTON_CHECK_BOX_CHECKED: string;
    RADIO_GROUP: string;
    VERTICAL_RADIO_GROUP: string;
    RADIO_BUTTON: string;
    RADIO_BUTTON_CHECK_BOX: string;
    RADIO_BUTTON_CHECK_BOX_CHECKED: string;
    SWITCH: string;
    SWITCH_ACTIVE: string;
    SWITCH_TOGGLE: string;
    SWITCH_TOGGLE_ACTIVE: string;
    MENU: string;
    MENU_ACTIVE: string;
    MENU_DROPDOWN: string;
    MENU_ITEM: string;
    MENU_BAR: string;
    TABBED_WINDOW: string;
    VERTICAL_TABBED_WINDOW: string;
    TABBED_WINDOW_TITLE_BAR: string;
    VERTICAL_TABBED_WINDOW_TITLE_BAR: string;
    TABBED_WINDOW_TITLE: string;
    TABBED_WINDOW_TITLE_ACTIVE: string;
    TABBED_WINDOW_CONTENT: string;
    TABBED_WINDOW_TITLE_BAR_CENTERED: string;
    TABBED_WINDOW_TITLE_BAR_SPACED: string;
    TABBED_WINDOW_TITLE_BAR_RIGHT: string;
    CANVAS: string;
    COLLAPSE_VIEW: string;
    COLLAPSE_VIEW_TITLE_BAR: string;
    COLLAPSE_VIEW_TITLE_BAR_ACTIVE: string;
    COLLAPSE_VIEW_CONTENT: string;
    ORDERED_LIST: string;
    UNORDERED_LIST: string;
    LIST_ITEM: string;
    TABLE: string;
    TABLE_HEADING: string;
    TABLE_FOOTER: string;
    TABLE_BODY: string;
    TABLE_ROW: string;
    TABLE_DATA: string;
    TABLE_HEADER: string;
    CAPTION: string;
    EMBED: string;
    IFRAME: string;
    VERTICAL_LAYOUT: string;
    HORIZONTAL_LAYOUT: string;
    FLOW_LAYOUT: string;
    GRID_LAYOUT: string;
    RELATIVE_LAYOUT: string;
    SCROLL_WINDOW: string;
    VERTICAL_SCROLL_WINDOW: string;
    HORIZONTAL_SCROLL_WINDOW: string;
    NAVIGATION_BAR: string;
    NAVIGATION_BAR_NAVIGATION_WINDOW: string;
    NAVIGATION_BAR_DRAWER_WINDOW: string;
    NAVIGATION_BAR_MENU_WINDOW: string;
    FOOTER_BAR: string;
    ACTIVITY: string;
    DIALOG: string;
    DIALOG_TITLE: string;
    DIALOG_WINDOW: string;
    DIALOG_TITLE_BAR: string;
    NOTIFICATION: string;
    TOAST: string;
    //
    [key: string]: string;
};

/**
 * CSS animation class names
 */
const AnimationClasses_: AnimationClasses = {
    PULSATING: "",
    SPINNING: "",
    SLIDE_IN_LEFT: "",
    SLIDE_IN_LEFT_SLOW: "",
    SLIDE_IN_LEFT_FAST: "",
    SLIDE_OUT_LEFT: "",
    SLIDE_OUT_LEFT_SLOW: "",
    SLIDE_OUT_LEFT_FAST: "",
    SLIDE_IN_RIGHT: "",
    SLIDE_IN_RIGHT_SLOW: "",
    SLIDE_IN_RIGHT_FAST: "",
    SLIDE_OUT_RIGHT: "",
    SLIDE_OUT_RIGHT_SLOW: "",
    SLIDE_OUT_RIGHT_FAST: "",
    SLIDE_IN_TOP: "",
    SLIDE_IN_TOP_SLOW: "",
    SLIDE_IN_TOP_FAST: "",
    SLIDE_OUT_TOP: "",
    SLIDE_OUT_TOP_FAST: "",
    SLIDE_OUT_TOP_SLOW: "",
    SLIDE_IN_BOTTOM: "",
    SLIDE_IN_BOTTOM_SLOW: "",
    SLIDE_IN_BOTTOM_FAST: "",
    SLIDE_OUT_BOTTOM: "",
    SLIDE_OUT_BOTTOM_SLOW: "",
    SLIDE_OUT_BOTTOM_FAST: "",
};

/**
 * Combined component and CSS animation class names
 */
const Classes_: ComponentClasses = {
    ...AnimationClasses_,
    HIDDEN: "",
    BUTTON: "",
    ICON_BUTTON: "",
    LABEL: "",
    PARAGRAPH: "",
    ICON: "",
    HEADING: "",
    LINK: "",
    IMAGE_VIEW: "",
    VIDEO_VIEW: "",
    AUDIO_VIEW: "",
    TEXT_INPUT: "",
    NUMBER_INPUT: "",
    WEEK_INPUT: "",
    TIME_INPUT: "",
    MONTH_INPUT: "",
    DATETIME_INPUT: "",
    DATE_INPUT: "",
    TEXT_AREA: "",
    PASSWORD_INPUT: "",
    COLOR_INPUT: "",
    FILE_INPUT: "",
    SELECTION: "",
    OPTION: "",
    SELECTION_VIEW: "",
    SELECTION_VIEW_ACTIVE: "",
    SELECTION_VIEW_DROPDOWN: "",
    OPTION_ITEM: "",
    PROGRESS_BAR: "",
    SLIDER: "",
    PROGRESS_INDICATOR: "",
    CHECK_BUTTON: "",
    CHECK_BUTTON_CHECK_BOX: "",
    CHECK_BUTTON_CHECK_BOX_CHECKED: "",
    RADIO_GROUP: "",
    VERTICAL_RADIO_GROUP: "",
    RADIO_BUTTON: "",
    RADIO_BUTTON_CHECK_BOX: "",
    RADIO_BUTTON_CHECK_BOX_CHECKED: "",
    SWITCH: "",
    SWITCH_ACTIVE: "",
    SWITCH_TOGGLE: "",
    SWITCH_TOGGLE_ACTIVE: "",
    MENU: "",
    MENU_ACTIVE: "",
    MENU_DROPDOWN: "",
    MENU_ITEM: "",
    MENU_BAR: "",
    TABBED_WINDOW: "",
    VERTICAL_TABBED_WINDOW: "",
    TABBED_WINDOW_TITLE_BAR: "",
    VERTICAL_TABBED_WINDOW_TITLE_BAR: "",
    TABBED_WINDOW_TITLE: "",
    TABBED_WINDOW_TITLE_ACTIVE: "",
    TABBED_WINDOW_CONTENT: "",
    TABBED_WINDOW_TITLE_BAR_CENTERED: "",
    TABBED_WINDOW_TITLE_BAR_SPACED: "",
    TABBED_WINDOW_TITLE_BAR_RIGHT: "",
    CANVAS: "",
    COLLAPSE_VIEW: "",
    COLLAPSE_VIEW_TITLE_BAR: "",
    COLLAPSE_VIEW_TITLE_BAR_ACTIVE: "",
    COLLAPSE_VIEW_CONTENT: "",
    ORDERED_LIST: "",
    UNORDERED_LIST: "",
    LIST_ITEM: "",
    TABLE: "",
    TABLE_HEADING: "",
    TABLE_FOOTER: "",
    TABLE_BODY: "",
    TABLE_ROW: "",
    TABLE_DATA: "",
    TABLE_HEADER: "",
    CAPTION: "",
    EMBED: "",
    IFRAME: "",
    VERTICAL_LAYOUT: "",
    HORIZONTAL_LAYOUT: "",
    FLOW_LAYOUT: "",
    GRID_LAYOUT: "",
    RELATIVE_LAYOUT: "",
    SCROLL_WINDOW: "",
    VERTICAL_SCROLL_WINDOW: "",
    HORIZONTAL_SCROLL_WINDOW: "",
    NAVIGATION_BAR: "",
    NAVIGATION_BAR_NAVIGATION_WINDOW: "",
    NAVIGATION_BAR_DRAWER_WINDOW: "",
    NAVIGATION_BAR_MENU_WINDOW: "",
    FOOTER_BAR: "",
    ACTIVITY: "",
    DIALOG: "",
    DIALOG_TITLE: "",
    DIALOG_WINDOW: "",
    DIALOG_TITLE_BAR: "",
    NOTIFICATION: "",
    TOAST: "",
};

function InitializeClasses_() {
    Object.keys(Classes_).map((_class_) => {
        let value = "" + _class_;

        while (value.includes("_")) {
            value = value.replace("_", "-");
        }

        Classes_[_class_] = value.toLowerCase();
    });
}

type SelectionViewOptionItem = {
    text?: string;
    content?: any;
};

type SelectionViewProps = React.HTMLAttributes<HTMLDivElement> & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: React.CSSProperties;
    optionItemStyle?: React.CSSProperties;
};

function SelectionView_(properties: SelectionViewProps) {
    let defaultSelection: SelectionViewOptionItem | null = {};

    let [open, setOpen] = React.useState(false);
    let [selection, setSelection] = React.useState(defaultSelection),
        props: SelectionViewProps = LoadDefaultProperties_(
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
        window.addEventListener(CustomEvents_.WINDOW_CLICK, () => {
            if (open === true) {
                setOpen(false);
            }
        });
        window.addEventListener(CustomEvents_.WINDOW_SCROLL, () => {
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
                (open
                    ? Classes_.SELECTION_VIEW_ACTIVE
                    : Classes_.SELECTION_VIEW)
            }
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
                setOpen(!open);
            }}
            {...RemoveFields_(props, [
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
                    className={Classes_.SELECTION_VIEW_DROPDOWN}
                    style={props.dropdownStyle}
                >
                    {...props.optionItems.map((item) => {
                        return (
                            <div
                                className={Classes_.OPTION_ITEM}
                                style={props.optionItemStyle}
                                onClick={(
                                    event: React.MouseEvent<
                                        HTMLDivElement,
                                        MouseEvent
                                    >
                                ) => {
                                    event.stopPropagation();
                                    setSelection(item);
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

type SwitchState = {
    active: boolean;
    [key: string]: any;
};

type SwitchProps = React.HTMLAttributes<HTMLDivElement> & {
    onActiveChange: Function;
    active?: boolean;
};

function Switch_(properties: SwitchProps) {
    let defaultState: SwitchState = {
        active: properties.active === true ? true : false,
    };

    let [state, setState] = React.useState(defaultState),
        props: SwitchProps = LoadDefaultProperties_(
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
                (state.active ? Classes_.SWITCH_ACTIVE : Classes_.SWITCH)
            }
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event?.stopPropagation();
                setState({ active: !state.active });
            }}
            {...RemoveFields_(props, ["className", "onActiveChange", "active"])}
        >
            <div
                className={
                    state.active
                        ? Classes_.SWITCH_TOGGLE_ACTIVE
                        : Classes_.SWITCH_TOGGLE
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

function CheckButton_(properties: CheckButtonProps) {
    let defaultState: CheckButtonState = {
        checked: properties.checked === true ? true : false,
    };

    let [state, setState] = React.useState(defaultState),
        props: CheckButtonProps = LoadDefaultProperties_(
            {
                text: "Check",
                onCheckedChange: () => {},
            },
            properties
        ) as CheckButtonProps;

    return (
        <div
            className={(props.className || "") + " " + Classes_.CHECK_BUTTON}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
                setState({ checked: !state.checked });
            }}
            {...RemoveFields_(props, [
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
                        ? Classes_.CHECK_BUTTON_CHECK_BOX_CHECKED
                        : Classes_.CHECK_BUTTON_CHECK_BOX
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

function RadioGroup_(properties: RadioGroupProps) {
    let defaultState: RadioGroupState = {
        checked: {
            text: "",
            value: "",
        },
    };

    let [state, setState] = React.useState(defaultState),
        props: RadioGroupProps = LoadDefaultProperties_(
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
                    ? Classes_.VERTICAL_RADIO_GROUP
                    : Classes_.RADIO_GROUP)
            }
            {...RemoveFields_(props, [
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
                        className={Classes_.RADIO_BUTTON}
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
                                    ? Classes_.RADIO_BUTTON_CHECK_BOX_CHECKED
                                    : Classes_.RADIO_BUTTON_CHECK_BOX
                            }
                        ></div>
                        {item.text}
                    </div>
                );
            })}
        </div>
    );
}

type MenuProps = React.HTMLAttributes<HTMLDivElement> & {
    menuItems?: Array<any>;
    title: any;
    dropdownStyle?: React.CSSProperties;
    open?: boolean;
};

type MenuState = {
    open: boolean;
    [key: string]: any;
};

function Menu_(properties: MenuProps) {
    let defaultState: MenuState = {
        open: properties.open === true ? true : false,
    };

    let elementId = GetUniqueId_(),
        [state, setState] = React.useState(defaultState),
        props: MenuProps = LoadDefaultProperties_(
            {
                menuItems: [],
                title: "Menu",
                dropdownStyle: {},
                onDropdown: () => {},
            },
            properties
        ) as MenuProps,
        toggle = () => {
            if (state.open !== true) {
                window.dispatchEvent(
                    new CustomEvent(CustomEvents_.CLOSE_MENU_REQUEST, {
                        detail: elementId,
                    })
                );
            }
            setState({
                open: !state.open,
            });
        };
    let [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        if (initialized === true) {
            // return;
        }
        window.addEventListener(CustomEvents_.WINDOW_CLICK, () => {
            if (state.open === true) {
                setState({
                    open: false,
                });
            }
        });
        window.addEventListener(CustomEvents_.WINDOW_SCROLL, () => {
            if (state.open === true) {
                setState({
                    open: false,
                });
            }
        });
        window.addEventListener(
            CustomEvents_.CLOSE_MENU_REQUEST,
            (event: CustomEventInit) => {
                if (event.detail.elementId !== elementId) {
                    if (state.open === true) {
                        setState({
                            open: false,
                        });
                    }
                }
            }
        );
        // setInitialized(true);
    });

    let children = props.menuItems || props.children || [];

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (state.open ? Classes_.MENU_ACTIVE : Classes_.MENU)
            }
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
                setState({ open: !state.open });
            }}
            {...RemoveFields_(props, [
                "className",
                "class",
                "menuItems",
                "title",
                "dropdownStyle",
            ])}
        >
            {props.title}
            {!state.open ? null : (
                <div
                    className={Classes_.MENU_DROPDOWN}
                    style={props.dropdownStyle}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

type CollapseViewProps = React.HTMLAttributes<HTMLDivElement> & {
    content?: Array<any> | any;
    title: any;
    titleBarStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: any;
    openIcon?: any;
};

type CollabpseViewState = {
    open: boolean;
    [key: string]: any;
};

function CollapseView_(properties: CollapseViewProps) {
    let defaultState: MenuState = {
        open: properties.open === true ? true : false,
    };

    let [state, setState] = React.useState(defaultState),
        props: CollapseViewProps = LoadDefaultProperties_(
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
            className={(props.className || "") + " " + Classes_.COLLAPSE_VIEW}
            {...RemoveFields_(props, [
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
                        ? Classes_.COLLAPSE_VIEW_TITLE_BAR_ACTIVE
                        : Classes_.COLLAPSE_VIEW_TITLE_BAR
                }
                onClick={(
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) => {
                    event.stopPropagation();
                    setState({ open: !state.open });
                }}
                style={props.titleBarStyle}
            >
                {props.title}
                {state.open
                    ? props.closeIcon || (
                          <BiCaretUp style={iconStyle}></BiCaretUp>
                      )
                    : props.openIcon || (
                          <BiCaretDown style={iconStyle}></BiCaretDown>
                      )}
            </div>
            {!state.open ? null : (
                <div
                    className={Classes_.COLLAPSE_VIEW_CONTENT}
                    style={props.contentStyle}
                >
                    {...LoadContent_(props.content)}
                </div>
            )}
        </div>
    );
}

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
        props: TabbedWindowProps = LoadDefaultProperties_(
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
        left: Classes_.TABBED_WINDOW_TITLE_BAR,
        center: Classes_.TABBED_WINDOW_TITLE_BAR_CENTERED,
        right: Classes_.TABBED_WINDOW_TITLE_BAR_RIGHT,
    }[props.tabsLocation || "left"];

    let currentTab: TabbedWindowTab | null =
        props.tabs.length > 0 ? props.tabs[state.currentTabIndex] : null;

    return (
        <div
            className={
                (props.className || "") +
                " " +
                (props.vertical
                    ? Classes_.VERTICAL_TABBED_WINDOW
                    : Classes_.TABBED_WINDOW)
            }
            {...RemoveFields_(props, [
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
                        ? Classes_.VERTICAL_TABBED_WINDOW_TITLE_BAR
                        : titleBarClass
                }
                style={props.titleBarStyle}
            >
                {...props.tabs.map((tab, index) => {
                    return (
                        <div
                            className={
                                index === state.currentTabIndex
                                    ? Classes_.TABBED_WINDOW_TITLE_ACTIVE
                                    : Classes_.TABBED_WINDOW_TITLE
                            }
                            onClick={(
                                event: React.MouseEvent<
                                    HTMLDivElement,
                                    MouseEvent
                                >
                            ) => {
                                event.stopPropagation();
                                setState({ currentTabIndex: index });
                            }}
                            style={props.titleStyle}
                        >
                            {tab.title}
                        </div>
                    );
                })}
            </div>
            <div
                className={Classes_.TABBED_WINDOW_CONTENT}
                style={props.contentStyle}
            >
                {currentTab ? currentTab.content : null}
            </div>
        </div>
    );
}

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
        props: NavigationBarProps = LoadDefaultProperties_(
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
        window.addEventListener(CustomEvents_.CLOSE_DRAWERS_REQUEST, () => {
            setState({
                drawerOpen: false,
                menuOpen: false,
            });
        });
        setInitialized(true);
    });

    let drawerContent: Array<any> = LoadContent_(props.drawerContent),
        menuContent: Array<any> = LoadContent_(props.menuContent),
        drawerButton: any | undefined = props.drawerButton,
        menuButton: any | undefined = props.menuButton,
        content: Array<any> = LoadContent_(
            props.content || props.children || []
        );

    let iconStyle = { fontSize: "35px", margin: "5px" };

    return (
        <div
            className={(props.className || "") + " " + Classes_.NAVIGATION_BAR}
            {...RemoveFields_(props, [
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
                    className={Classes_.NAVIGATION_BAR_NAVIGATION_WINDOW}
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
                            className={Classes_.NAVIGATION_BAR_DRAWER_WINDOW}
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
                            className={Classes_.NAVIGATION_BAR_MENU_WINDOW}
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

function CustomElement_(
    tag: any,
    customClass: string,
    customProperties: { [key: string]: any },
    properties: React.HTMLAttributes<{}>,
    ...children: Array<any>
) {
    let className = properties.className
        ? [customClass, properties.className].join(" ")
        : customClass;

    let style = {
        ...(customProperties.style || {}),
        ...(properties.style || {}),
    };

    let parsedChildren = properties.children
        ? [...children, properties.children]
        : children;

    delete properties.children;

    return CreateElement_(
        tag,
        {
            ...customProperties,
            ...properties,
            className: className,
            style: style,
        },
        ...parsedChildren
    );
}

const CustomEvents_ = {
    WINDOW_CLICK: "WINDOW_CLICK",
    WINDOW_SCROLL: "WINDOW_SCROLL",
    CLOSE_MENU_REQUEST: "CLOSE_MENU_REQUEST",
    CLOSE_DRAWERS_REQUEST: "CLOSE_DRAWERS_REQUEST",
};

function Initialize_() {
    InitializeClasses_();
    window.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent(CustomEvents_.WINDOW_CLICK, {}));
    });
    window.addEventListener("scroll", () => {
        window.dispatchEvent(new CustomEvent(CustomEvents_.WINDOW_SCROLL, {}));
    });
}

// EXPORTS

export function Initialize() {
    Initialize_();
}

export function Render(element: React.ReactNode, htmlElement: Container) {
    return Render_(element, htmlElement);
}

export function Store(defaultState: RLStoreState) {
    return Store_(defaultState);
}

export function Button(
    properties: React.HTMLAttributes<HTMLDivElement> & { text: string }
) {
    return CustomElement_(
        "div",
        Classes_.BUTTON,
        {},
        properties,
        properties.text
    );
}

export function IconButton(
    properties: React.HTMLAttributes<HTMLDivElement> & {
        text: string;
        icon: any;
    }
) {
    return CustomElement_(
        "div",
        Classes_.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text
    );
}

export function Label(
    properties: React.HTMLAttributes<HTMLSpanElement> & { text: string }
) {
    return CustomElement_(
        "span",
        Classes_.LABEL,
        {},
        properties,
        properties.text
    );
}

export function Paragraph(
    properties: React.HTMLAttributes<HTMLParagraphElement> & { text: string }
) {
    return CustomElement_(
        "p",
        Classes_.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}

export function Icon(
    properties: React.HTMLAttributes<HTMLSpanElement> & { text: string }
) {
    return CustomElement_("i", Classes_.ICON, {}, properties);
}

export function Heading1(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement_(
        "h1",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading2(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement_(
        "h2",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading3(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement_(
        "h3",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading4(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement_(
        "h4",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading5(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement_(
        "h5",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading6(
    properties: React.HTMLAttributes<HTMLHeadingElement> & { text: string }
) {
    return CustomElement_(
        "h6",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Link(
    properties: React.HTMLAttributes<HTMLAnchorElement>,
    ...children: Array<any>
) {
    return CustomElement_("a", Classes_.LINK, {}, properties, ...children);
}

export function ImageView(properties: React.HTMLAttributes<HTMLImageElement>) {
    return CustomElement_("img", Classes_.IMAGE_VIEW, {}, properties);
}

export function VideoView(
    properties: React.HTMLAttributes<HTMLVideoElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "video",
        Classes_.VIDEO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}

export function AudioView(
    properties: React.HTMLAttributes<HTMLAudioElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "audio",
        Classes_.AUDIO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}

export function TextInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.TEXT_INPUT,
        {
            type: "text",
        },
        properties
    );
}

export function NumberInput(
    properties: React.HTMLAttributes<HTMLInputElement>
) {
    return CustomElement_(
        "input",
        Classes_.NUMBER_INPUT,
        {
            type: "number",
        },
        properties
    );
}

export function WeekInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.WEEK_INPUT,
        {
            type: "week",
        },
        properties
    );
}

export function TimeInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.TIME_INPUT,
        {
            type: "time",
        },
        properties
    );
}

export function MonthInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.MONTH_INPUT,
        {
            type: "month",
        },
        properties
    );
}

export function DatetimeInput(
    properties: React.HTMLAttributes<HTMLInputElement>
) {
    return CustomElement_(
        "input",
        Classes_.DATETIME_INPUT,
        {
            type: "datetime-local",
        },
        properties
    );
}

export function DateInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.DATE_INPUT,
        {
            type: "date",
        },
        properties
    );
}

export function TextArea(
    properties: React.HTMLAttributes<HTMLTextAreaElement>
) {
    return CustomElement_(
        "textarea",
        Classes_.TEXT_AREA,
        {
            rows: 5,
        },
        properties
    );
}

export function PasswordInput(
    properties: React.HTMLAttributes<HTMLInputElement>
) {
    return CustomElement_(
        "input",
        Classes_.PASSWORD_INPUT,
        {
            type: "password",
        },
        properties
    );
}

export function ColorInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.COLOR_INPUT,
        {
            type: "color",
        },
        properties
    );
}

export function FileInput(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.FILE_INPUT,
        {
            type: "file",
        },
        properties
    );
}

export function Selection(
    properties: React.HTMLAttributes<HTMLSelectElement>,
    ...options: Array<any>
) {
    return CustomElement_(
        "select",
        Classes_.SELECTION,
        {},
        properties,
        ...options
    );
}

export function Option(
    properties: React.HTMLAttributes<HTMLOptionElement> & { text?: string }
) {
    return CustomElement_(
        "option",
        Classes_.OPTION,
        {},
        properties,
        properties.text || ""
    );
}

export function ProgressBar(
    properties: React.HTMLAttributes<HTMLProgressElement>
) {
    return CustomElement_("progress", Classes_.PROGRESS_BAR, {}, properties);
}

export function Slider(properties: React.HTMLAttributes<HTMLInputElement>) {
    return CustomElement_(
        "input",
        Classes_.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export function ProgressIndicator(
    properties: React.HTMLAttributes<HTMLDivElement>
) {
    return CustomElement_("div", Classes_.PROGRESS_INDICATOR, {}, properties);
}

export function MenuBar(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...menus: Array<any>
) {
    return CustomElement_("div", Classes_.MENU_BAR, {}, properties, ...menus);
}

export function MenuItem(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.MENU_ITEM,
        {},
        properties,
        ...children
    );
}

export function Canvas(properties: React.HTMLAttributes<HTMLCanvasElement>) {
    return CustomElement_("canvas", Classes_.CANVAS, {}, properties);
}

export function UnorderedList(
    properties: React.HTMLAttributes<HTMLUListElement>,
    ...listItems: Array<any>
) {
    return CustomElement_(
        "ul",
        Classes_.UNORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function OrderedList(
    properties: React.HTMLAttributes<HTMLOListElement>,
    ...listItems: Array<any>
) {
    return CustomElement_(
        "ol",
        Classes_.ORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function ListItem(
    properties: React.HTMLAttributes<HTMLLIElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "li",
        Classes_.LIST_ITEM,
        {},
        properties,
        ...children
    );
}

export function Table(
    properties: React.HTMLAttributes<HTMLTableElement>,
    ...children: Array<any>
) {
    return CustomElement_("table", Classes_.TABLE, {}, properties, ...children);
}

export function TableHeading(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "thead",
        Classes_.TABLE_HEADING,
        {},
        properties,
        ...children
    );
}

export function TableFooter(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "tfoot",
        Classes_.TABLE_FOOTER,
        {},
        properties,
        ...children
    );
}

export function TableBody(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "tbody",
        Classes_.TABLE_BODY,
        {},
        properties,
        ...children
    );
}

export function TableRow(
    properties: React.HTMLAttributes<HTMLTableRowElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "tr",
        Classes_.TABLE_ROW,
        {},
        properties,
        ...children
    );
}

export function TableData(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "td",
        Classes_.TABLE_DATA,
        {},
        properties,
        ...children
    );
}

export function TableHeader(
    properties: React.HTMLAttributes<HTMLTableCellElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "th",
        Classes_.TABLE_HEADER,
        {},
        properties,
        ...children
    );
}

export function Caption(
    properties: React.HTMLAttributes<HTMLTableCaptionElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "caption",
        Classes_.CAPTION,
        {},
        properties,
        ...children
    );
}

export function Embed(
    properties: React.HTMLAttributes<HTMLEmbedElement>,
    ...children: Array<any>
) {
    return CustomElement_("embed", Classes_.EMBED, {}, properties, ...children);
}

export function Iframe(
    properties: React.HTMLAttributes<HTMLIFrameElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "iframe",
        Classes_.IFRAME,
        {},
        properties,
        ...children
    );
}

export function VerticalLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.VERTICAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function HorizontalLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.HORIZONTAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function FlowLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.FLOW_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function GridLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.GRID_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function RelativeLayout(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.RELATIVE_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function ScrollWindow(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function VerticalScrollWindow(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.VERTICAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function HorizontalScrollWindow(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.HORIZONTAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function FooterBar(
    properties: React.HTMLAttributes<HTMLDivElement>,
    ...children: Array<any>
) {
    return CustomElement_(
        "div",
        Classes_.FOOTER_BAR,
        {},
        properties,
        ...children
    );
}

export function Activity(
    properties: React.HTMLAttributes<HTMLDivElement> & {
        navigationBar?: any;
        footerBar?: any;
    }
) {
    return CustomElement_(
        "div",
        Classes_.ACTIVITY,
        {
            style: {
                paddingTop: !properties.navigationBar ? "0px" : "50px",
                paddingBottom: !properties.footerBar ? "0px" : "60px",
            },
        },
        properties,
        ...LoadContent_(properties.content),
        properties.footerBar,
        properties.navigationBar
    );
}

export function SelectionView(properties: SelectionViewProps) {
    return <SelectionView_ {...properties} />;
}

export function Switch(properties: SwitchProps) {
    return <Switch_ {...properties} />;
}

export function CheckButton(properties: CheckButtonProps) {
    return <CheckButton_ {...properties} />;
}

export function RadioGroup(properties: RadioGroupProps) {
    return <RadioGroup_ {...properties} />;
}

export function Menu(properties: MenuProps) {
    return <Menu_ {...properties} />;
}

export function CollapseView(properties: CollapseViewProps) {
    return <CollapseView_ {...properties} />;
}

export function TabbedWindow(properties: TabbedWindowProps) {
    return <TabbedWindow_ {...properties} />;
}

export function NavigationBar(properties: NavigationBarProps) {
    return <NavigationBar_ {...properties} />;
}

type ApplicationRouter = (title: string) => any | null;

type ApplicationProps = {
    router?: ApplicationRouter;
    baseElement?: HTMLElement;
};

type Application = {
    baseElement: HTMLElement;
    hashUpdateActive: boolean;
    router: ApplicationRouter;
    showActivity: (activity: any, title: string | null) => void;
    openActivity: (title: string) => void;
};

export function Application(properties: ApplicationProps): Application {
    let application: Application = {
        baseElement: properties.baseElement || document.body,
        hashUpdateActive: true,
        router:
            properties.router ||
            function () {
                return null;
            },
        showActivity(activity: any, title: string | null) {
            Render(activity, this.baseElement);
            if (title) {
                this.hashUpdateActive = false;
                window.location.hash = title;
                setTimeout(() => {
                    this.hashUpdateActive = true;
                }, 1500);
            }
        },
        openActivity(title: string) {
            window.location.hash = title;
        },
    };

    window.addEventListener("hashchange", () => {
        if (application.hashUpdateActive !== true) {
            return;
        }

        let title = window.location.hash.slice(1),
            activity = application.router(title);

        if (activity) {
            application.showActivity(activity, null);
        }
    });

    return application;
}

type ApplicationV2 = {
    baseElement: HTMLElement;
    pathUpdateActive: boolean;
    router: ApplicationRouter;
    showActivity: (activity: any, path: string | null) => void;
    openActivity: (title: string) => void;
};

export function ApplicationV2(properties: ApplicationV2) {
    let application: ApplicationV2 = {
        baseElement: properties.baseElement || document.body,
        pathUpdateActive: true,
        router:
            properties.router ||
            function () {
                return null;
            },
        showActivity(activity: any, path: string | null) {
            Render(activity, this.baseElement);

            if (path) {
                history.pushState({}, "", path);
            }
        },
        openActivity(path: string) {
            let activity = this.router(path);

            if (activity) {
                this.showActivity(activity, path);
            }
        },
    };

    window.addEventListener("popstate", () => {
        application.openActivity(document.location.pathname);
    });

    window.addEventListener("DOMContentLoaded", () => {
        application.openActivity(document.location.pathname);
    });

    return application;
}

type ShowDialogProps = {
    duration?: number;
    content: Array<any> | any;
    splash?: boolean;
    title?: string;
    closeOnClickOutside?: boolean;
    style?: React.CSSProperties;
    titleBarStyle?: React.CSSProperties;
    closeButton?: any;
    icon?: any;
};

export function showDialog(properties: ShowDialogProps) {
    closeDialogs();

    let content = LoadContent_(properties.content),
        dialogId = GetUniqueId_(),
        baseElement = document.createElement("div");

    let iconStyle = { fontSize: "25px", margin: "5px" };

    let element = (
        <div
            className={Classes_.DIALOG}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
            }}
            style={properties.style || {}}
        >
            {properties.splash ? null : (
                <div className={Classes_.DIALOG_TITLE_BAR}>
                    {properties.icon || (
                        <BiInfoSquare style={iconStyle}></BiInfoSquare>
                    )}
                    <span className={Classes_.DIALOG_TITLE}>
                        {properties.title || "..."}
                    </span>
                    {properties.closeButton || (
                        <BiXCircle
                            style={iconStyle}
                            onClick={(
                                event: React.MouseEvent<SVGElement, MouseEvent>
                            ) => {
                                event.stopPropagation();
                                closeDialog(dialogId);
                            }}
                        ></BiXCircle>
                    )}
                </div>
            )}
            {...content}
        </div>
    );

    baseElement.classList.add(Classes_.DIALOG_WINDOW);
    baseElement.setAttribute("dialog-id", dialogId);

    if (properties.closeOnClickOutside === true) {
        baseElement.addEventListener("click", () => {
            closeDialog(dialogId);
        });
    }
    document.body.appendChild(baseElement);

    Render_(element, baseElement);

    if (properties.duration && typeof properties.duration === "number") {
        setTimeout(() => {
            closeDialog(dialogId);
        }, properties.duration);
    }

    return dialogId;
}

export function closeDialog(dialogId: string) {
    let element = document.querySelector(`[dialog-id="${dialogId}"]`);

    if (element) {
        element.parentNode?.removeChild(element);
    }
}

type ShowNotificationProps = {
    duration?: number;
    content: Array<any> | any;
};

export function showNotification(properties: ShowNotificationProps): string {
    closeNotifications();

    let content = LoadContent_(properties.content),
        notificationId = GetUniqueId_();

    let baseElement = document.createElement("div");

    let element = (
        <div
            className={Classes_.NOTIFICATION}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.stopPropagation();
            }}
        >
            {...content}
        </div>
    );

    baseElement.setAttribute("notification-id", notificationId);
    document.body.appendChild(baseElement);
    Render_(element, baseElement);

    setTimeout(() => {
        closeNotification(notificationId);
    }, properties.duration || 3000);

    return notificationId;
}

export function closeNotification(notificationId: string) {
    let element = document.querySelector(
        `[notification-id="${notificationId}"]`
    );

    if (element) {
        element.parentNode?.removeChild(element);
    }
}

type ShowToastProps = {
    text: string;
    duration?: number;
    style?: React.CSSProperties;
};

export function showToast(properties: ShowToastProps): string | null {
    closeToasts();
    if (properties.text) {
        return null;
    }
    let toastId = GetUniqueId_(),
        baseElement = document.createElement("div");

    baseElement.classList.add(Classes_.TOAST);
    baseElement.setAttribute("toast-id", toastId);
    baseElement.textContent = properties.text;
    Object.assign(baseElement.style, properties.style || {});
    document.body.appendChild(baseElement);

    setTimeout(() => {
        closeToast(toastId);
    }, properties.duration || 3000);

    return toastId;
}

export function closeToast(toastId: string) {
    let element = document.querySelector(`[toast-id="${toastId}"]`);
    if (element) {
        element.parentNode?.removeChild(element);
    }
}

export function closeDrawers() {
    window.dispatchEvent(
        new CustomEvent(CustomEvents_.CLOSE_DRAWERS_REQUEST, { detail: {} })
    );
}

export function closeDialogs() {
    document.querySelectorAll("[dialog-id]").forEach((element) => {
        element.parentNode?.removeChild(element);
    });
}

export function closeNotifications() {
    document.querySelectorAll("[notification-id]").forEach((element) => {
        element.parentNode?.removeChild(element);
    });
}

export function closeToasts() {
    document.querySelectorAll("[toast-id]").forEach((element) => {
        element.parentNode?.removeChild(element);
    });
}

export function getWindowDimensions() {
    return GetWindowDimensions_();
}

export function getElementDimensions(element: HTMLElement) {
    return GetElementDimensions_(element);
}

export function getConstants() {
    return {
        Colors: Colors_,
        Classes: Classes_,
    };
}
