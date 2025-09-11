import React from "react";
import { Container, createRoot } from "react-dom/client";

/**
 * Suposedly generates a unique string
 * @returns The unique string.
 */
export function GetUniqueId(): string {
    let x = 0;

    for (let q = 0; q < 10; ++q) {
        x += Date.now() * Math.random();
    }

    return x.toString().replace(".", "");
}

/**
 * Removes specified field names from an object
 * @param object
 * @param fields
 * @returns
 */
export function RemoveFields(
    object: { [key: string]: any },
    fields: Array<string>
) {
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

export function Spread(items: Array<any>): Array<any> {
    let spread: Array<any> = [];
    items.map((x) => {
        if (Array.isArray(x)) {
            spread = spread.concat(Spread(x));
        } else {
            spread.push(x);
        }
    });

    return spread;
}

/**
 * Asserts values are provied as an array
 * @param content
 * @returns
 */
export function LoadContent(content: Array<any> | any): Array<any> {
    return !content ? [] : Array.isArray(content) ? content : [content];
}

export function LoadDefaultProperties(
    defaultProperties: { [key: string]: any },
    properties: { [key: string]: any }
) {
    return Object.assign(defaultProperties, properties);
}

export function CreateElement(
    tag: any,
    properties: { [key: string]: any },
    ...children: Array<any>
) {
    return React.createElement(tag, properties, ...Spread(children));
}

export function CustomElement(
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

    return CreateElement(
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

export function Render(component: React.ReactNode, element: Container) {
    return createRoot(element).render(component);
}

export const Colors = {
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
export const AnimationClasses: AnimationClasses = {
    PULSATING: "pulsating",
    SPINNING: "spinning",
    SLIDE_IN_LEFT: "slide-in-left",
    SLIDE_IN_LEFT_SLOW: "slide-in-left-slow",
    SLIDE_IN_LEFT_FAST: "slide-in-left-fast",
    SLIDE_OUT_LEFT: "slide-out-left",
    SLIDE_OUT_LEFT_SLOW: "slide-out-left-slow",
    SLIDE_OUT_LEFT_FAST: "slide-out-left-fast",
    SLIDE_IN_RIGHT: "slide-in-right",
    SLIDE_IN_RIGHT_SLOW: "slide-in-right-slow",
    SLIDE_IN_RIGHT_FAST: "slide-in-right-fast",
    SLIDE_OUT_RIGHT: "slide-out-right",
    SLIDE_OUT_RIGHT_SLOW: "slide-out-right-slow",
    SLIDE_OUT_RIGHT_FAST: "slide-out-right-fast",
    SLIDE_IN_TOP: "slide-in-top",
    SLIDE_IN_TOP_SLOW: "slide-in-top-slow",
    SLIDE_IN_TOP_FAST: "slide-in-top-fast",
    SLIDE_OUT_TOP: "slide-out-top",
    SLIDE_OUT_TOP_FAST: "slide-out-top-fast",
    SLIDE_OUT_TOP_SLOW: "slide-out-top-slow",
    SLIDE_IN_BOTTOM: "slide-in-bottom",
    SLIDE_IN_BOTTOM_SLOW: "slide-in-bottom-slow",
    SLIDE_IN_BOTTOM_FAST: "slide-in-bottom-fast",
    SLIDE_OUT_BOTTOM: "slide-out-bottom",
    SLIDE_OUT_BOTTOM_SLOW: "slide-out-bottom-slow",
    SLIDE_OUT_BOTTOM_FAST: "slide-out-bottom-fast",
};

/**
 * Combined component and CSS animation class names
 */
export const Classes: ComponentClasses = {
    ...AnimationClasses,
    HIDDEN: "hidden",
    BUTTON: "button",
    ICON_BUTTON: "icon-button",
    LABEL: "label",
    PARAGRAPH: "paragraph",
    ICON: "icon",
    HEADING: "heading",
    LINK: "link",
    IMAGE_VIEW: "image-view",
    VIDEO_VIEW: "video-view",
    AUDIO_VIEW: "audio-view",
    TEXT_INPUT: "text-input",
    NUMBER_INPUT: "number-input",
    WEEK_INPUT: "week-input",
    TIME_INPUT: "time-input",
    MONTH_INPUT: "month-input",
    DATETIME_INPUT: "datetime-input",
    DATE_INPUT: "date-input",
    TEXT_AREA: "text-area",
    PASSWORD_INPUT: "password-input",
    COLOR_INPUT: "color-input",
    FILE_INPUT: "file-input",
    SELECTION: "selection",
    OPTION: "option",
    SELECTION_VIEW: "selection-view",
    SELECTION_VIEW_ACTIVE: "selection-view-active",
    SELECTION_VIEW_DROPDOWN: "selection-view-dropdown",
    OPTION_ITEM: "option-item",
    PROGRESS_BAR: "progress-bar",
    SLIDER: "slider",
    PROGRESS_INDICATOR: "progress-indicator",
    CHECK_BUTTON: "check-button",
    CHECK_BUTTON_CHECK_BOX: "check-button-check-box",
    CHECK_BUTTON_CHECK_BOX_CHECKED: "check-button-check-box-checked",
    RADIO_GROUP: "radio-group",
    VERTICAL_RADIO_GROUP: "vertical-radio-group",
    RADIO_BUTTON: "radio-button",
    RADIO_BUTTON_CHECK_BOX: "radio-button-check-box",
    RADIO_BUTTON_CHECK_BOX_CHECKED: "radio-button-check-box-checked",
    SWITCH: "switch",
    SWITCH_ACTIVE: "switch-active",
    SWITCH_TOGGLE: "switch-toggle",
    SWITCH_TOGGLE_ACTIVE: "switch-toggle-active",
    MENU: "menu",
    MENU_ACTIVE: "menu-active",
    MENU_DROPDOWN: "menu-dropdown",
    MENU_ITEM: "menu-item",
    MENU_BAR: "menu-bar",
    TABBED_WINDOW: "tabbed-window",
    VERTICAL_TABBED_WINDOW: "vertical-tabbed-window",
    TABBED_WINDOW_TITLE_BAR: "tabbed-window-title-bar",
    VERTICAL_TABBED_WINDOW_TITLE_BAR: "vertical-tabbed-window-title-bar",
    TABBED_WINDOW_TITLE: "tabbed-window-title",
    TABBED_WINDOW_TITLE_ACTIVE: "tabbed-window-title-active",
    TABBED_WINDOW_CONTENT: "tabbed-window-content",
    TABBED_WINDOW_TITLE_BAR_CENTERED: "tabbed-window-title-bar-centered",
    TABBED_WINDOW_TITLE_BAR_SPACED: "tabbed-window-title-bar-spaced",
    TABBED_WINDOW_TITLE_BAR_RIGHT: "tabbed-window-title-bar-right",
    CANVAS: "canvas",
    COLLAPSE_VIEW: "collapse-view",
    COLLAPSE_VIEW_TITLE_BAR: "collapse-view-title-bar",
    COLLAPSE_VIEW_TITLE_BAR_ACTIVE: "collapse-view-title-bar-active",
    COLLAPSE_VIEW_CONTENT: "collapse-view-content",
    ORDERED_LIST: "ordered-list",
    UNORDERED_LIST: "unordered-list",
    LIST_ITEM: "list-item",
    TABLE: "table",
    TABLE_HEADING: "table-heading",
    TABLE_FOOTER: "table-footer",
    TABLE_BODY: "table-body",
    TABLE_ROW: "table-row",
    TABLE_DATA: "table-data",
    TABLE_HEADER: "table-header",
    CAPTION: "caption",
    EMBED: "embed",
    IFRAME: "iframe",
    VERTICAL_LAYOUT: "vertical-layout",
    HORIZONTAL_LAYOUT: "horizontal-layout",
    FLOW_LAYOUT: "flow-layout",
    GRID_LAYOUT: "grid-layout",
    RELATIVE_LAYOUT: "relative-layout",
    SCROLL_WINDOW: "scroll-window",
    VERTICAL_SCROLL_WINDOW: "vertical-scroll-window",
    HORIZONTAL_SCROLL_WINDOW: "horizontal-scroll-window",
    NAVIGATION_BAR: "navigation-bar",
    NAVIGATION_BAR_NAVIGATION_WINDOW: "navigation-bar-navigation-window",
    NAVIGATION_BAR_DRAWER_WINDOW: "navigation-bar-drawer-window",
    NAVIGATION_BAR_MENU_WINDOW: "navigation-bar-menu-window",
    FOOTER_BAR: "footer-bar",
    ACTIVITY: "activity",
    DIALOG: "dialog",
    DIALOG_TITLE: "dialog-title",
    DIALOG_WINDOW: "dialog-window",
    DIALOG_TITLE_BAR: "dialog-title-bar",
    NOTIFICATION: "notification",
    TOAST: "toast",
};

export const CustomEvents = {
    WINDOW_CLICK: "WINDOW_CLICK",
    WINDOW_SCROLL: "WINDOW_SCROLL",
    CLOSE_MENU_REQUEST: "CLOSE_MENU_REQUEST",
    CLOSE_DRAWERS_REQUEST: "CLOSE_DRAWERS_REQUEST",
};

function Initialize_() {
    window.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent(CustomEvents.WINDOW_CLICK, {}));
    });
    window.addEventListener("scroll", () => {
        window.dispatchEvent(new CustomEvent(CustomEvents.WINDOW_SCROLL, {}));
    });
}

export function Initialize() {
    Initialize_();
}

export function getConstants() {
    return {
        Colors: Colors,
        Classes: Classes,
    };
}
