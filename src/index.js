import React from "react";
import reactDom from "react-dom";
import {
    BiCaretDown,
    BiCaretUp,
    BiInfoSquare,
    BiMenu,
    BiXCircle,
} from "react-icons/bi";
import "./index.css";

function IsNull_(item) {
    return item === null || item === undefined || item === "";
}

function NotNull_(item) {
    return !IsNull_(item);
}

function GetUniqueId_() {
    let x = 0;
    for (let q = 0; q < 10; ++q) {
        x += Date.now() * Math.random();
    }
    return x.toString().replace(".", "");
}

function Spread_(items) {
    let spread = [];
    items.map((x) => {
        if (Array.isArray(x)) {
            spread = spread.concat(Spread_(x));
        } else {
            spread.push(x);
        }
    });
    return spread;
}

function CreateElement_(tag, properties, ...children) {
    return React.createElement(tag, properties, ...Spread_(children));
}

function Render_(component, element) {
    return reactDom.createRoot(element).render(component);
}

function Store_(state) {
    return {
        state: state,
        handlers: {},
        getState() {
            return this.state;
        },
        setState(state) {
            this.state = {
                ...this.state,
                ...state,
            };
            Object.values(this.handlers).map((handler) => {
                handler(this.state);
            });
        },
        subscribe(handler) {
            let handlerId = GetUniqueId_();
            this.handlers[handlerId] = handler;
            return handlerId;
        },
        unsubscribe(handlerId) {
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

const AnimationClasses_ = {
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
    },
    Classes_ = {
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

function GetWindowDimensions_() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}

function GetElementDimensions_(element) {
    return {
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        offsetTop: element.offsetTop,
        offsetLeft: element.offsetLeft,
    };
}

function LoadContent_(content) {
    return IsNull_(content) ? [] : Array.isArray(content) ? content : [content];
}

function LoadDefaultProperties_(defaultProperties, properties) {
    return Object.assign(defaultProperties, properties);
}

function RemoveFields_(object, fields) {
    let newObject = {};
    Object.keys(object)
        .filter((field) => {
            return fields.includes(field) !== true;
        })
        .map((field) => {
            newObject[field] = object[field];
        });
    return newObject;
}

function SelectionView_(properties) {
    let [open, setOpen] = React.useState(false);
    let [selection, setSelection] = React.useState(null),
        props = LoadDefaultProperties_(
            {
                optionItems: [],
                onInput: () => {},
                dropdownStyle: {},
                optionItemStyle: {},
            },
            properties
        );
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
    return CreateElement_(
        "div",
        {
            className:
                (props.className || "") +
                " " +
                (open === true
                    ? Classes_.SELECTION_VIEW_ACTIVE
                    : Classes_.SELECTION_VIEW),
            onClick: (event) => {
                event.stopPropagation();
                setOpen(!open);
            },
            ...RemoveFields_(props, ["className"]),
        },
        NotNull_(selection) ? selection.text || "Select" : "Select",
        open !== true
            ? null
            : CreateElement_(
                  "div",
                  {
                      className: Classes_.SELECTION_VIEW_DROPDOWN,
                      style: props.dropdownStyle,
                  },
                  ...props.optionItems.map((item) => {
                      return CreateElement_(
                          "div",
                          {
                              className: Classes_.OPTION_ITEM,
                              style: props.optionItemStyle,
                              onClick: (event) => {
                                  event.stopPropagation();
                                  setSelection(item);
                                  setOpen(false);
                                  props.onInput(item);
                              },
                          },
                          item.content || item.text || "Option"
                      );
                  })
              )
    );
}

function Switch_(properties) {
    let [state, setState] = React.useState({
            active: properties.active === true ? true : false,
        }),
        props = LoadDefaultProperties_(
            {
                onActiveChange: () => {},
            },
            properties
        );
    return CreateElement_(
        "div",
        {
            className:
                (props.className || "") +
                " " +
                (state.active === true
                    ? Classes_.SWITCH_ACTIVE
                    : Classes_.SWITCH),
            onClick: (event) => {
                event.stopPropagation();
                props.onActiveChange(!state.active);
                setState({
                    active: !state.active,
                });
            },
            ...RemoveFields_(props, ["className"]),
        },
        CreateElement_("div", {
            className:
                state.active === true
                    ? Classes_.SWITCH_TOGGLE_ACTIVE
                    : Classes_.SWITCH_TOGGLE,
        })
    );
}

function CheckButton_(properties) {
    let [state, setState] = React.useState({
            checked: properties.checked === true ? true : false,
        }),
        props = LoadDefaultProperties_(
            {
                text: "Ckeck",
                onCheckedChange: () => {},
            },
            properties
        );
    return CreateElement_(
        "div",
        {
            className: (props.className || "") + " " + Classes_.CHECK_BUTTON,
            onClick: (event) => {
                event.stopPropagation();
                props.onCheckedChange(!state.checked);
                setState({
                    checked: !state.checked,
                });
            },
            ...RemoveFields_(props, ["className"]),
        },
        CreateElement_("div", {
            className:
                state.checked === true
                    ? Classes_.CHECK_BUTTON_CHECK_BOX_CHECKED
                    : Classes_.CHECK_BUTTON_CHECK_BOX,
        }),
        props.text
    );
}

function RadioGroup_(properties) {
    let [state, setState] = React.useState({
            checked: {
                text: "",
                value: "",
            },
        }),
        props = LoadDefaultProperties_(
            {
                radioItems: [],
                vertical: false,
                onCheckedChange: () => {},
                radioButtonStyle: {},
            },
            properties
        );
    return CreateElement_(
        "div",
        {
            className:
                (props.className || "") +
                " " +
                (props.vertical === true
                    ? Classes_.VERTICAL_RADIO_GROUP
                    : Classes_.RADIO_GROUP),
            ...RemoveFields_(props, ["className"]),
        },
        ...props.radioItems.map((item) => {
            return CreateElement_(
                "div",
                {
                    className: Classes_.RADIO_BUTTON,
                    onClick: (event) => {
                        event.stopPropagation();
                        setState({
                            checked: item,
                        });
                        props.onCheckedChange(item.value);
                    },
                    style: props.radioButtonStyle,
                },
                CreateElement_("div", {
                    className:
                        item.value === state.checked.value
                            ? Classes_.RADIO_BUTTON_CHECK_BOX_CHECKED
                            : Classes_.RADIO_BUTTON_CHECK_BOX,
                }),
                item.text
            );
        })
    );
}

function Menu_(properties) {
    let elementId = GetUniqueId_(),
        [state, setState] = React.useState({
            open: properties.open === true ? true : false,
        }),
        props = LoadDefaultProperties_(
            {
                menuItems: [],
                title: "Menu",
                dropdownStyle: {},
                onDropdown: () => {},
            },
            properties
        ),
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
        window.addEventListener(CustomEvents_.CLOSE_MENU_REQUEST, (event) => {
            if (event.detail.elementId !== elementId) {
                if (state.open === true) {
                    setState({
                        open: false,
                    });
                }
            }
        });
        // setInitialized(true);
    });
    return CreateElement_(
        "div",
        {
            className:
                (props.className || "") +
                " " +
                (state.open === true ? Classes_.MENU_ACTIVE : Classes_.MENU),
            onClick: (event) => {
                event.stopPropagation();
                toggle();
            },
            ...RemoveFields_(props, ["className"]),
        },
        props.title,
        state.open !== true
            ? null
            : CreateElement_(
                  "div",
                  {
                      className: Classes_.MENU_DROPDOWN,
                      style: props.dropdownStyle,
                  },
                  ...props.menuItems
              )
    );
}

function CollapseView_(properties) {
    let [state, setState] = React.useState({
            open: properties.open === true ? true : false,
        }),
        props = LoadDefaultProperties_(
            {
                title: "...",
                titleBarStyle: {},
                contentStyle: {},
                content: null,
                onCollapse: () => {},
            },
            properties
        );
    return CreateElement_(
        "div",
        {
            className: (props.className || "") + " " + Classes_.COLLAPSE_VIEW,
            ...RemoveFields_(props, ["className"]),
        },
        CreateElement_(
            "div",
            {
                className:
                    state.open === true
                        ? Classes_.COLLAPSE_VIEW_TITLE_BAR_ACTIVE
                        : Classes_.COLLAPSE_VIEW_TITLE_BAR,
                onClick: (event) => {
                    event.stopPropagation();
                    props.onCollapse(!state.open);
                    setState({
                        open: !state.open,
                    });
                },
                style: props.titleBarStyle,
            },
            props.title,
            state.open === true
                ? props.closeIcon ||
                      BiCaretUp({ style: { fontSize: "20px", margin: "3px" } })
                : props.openIcon ||
                      BiCaretDown({
                          style: { fontSize: "20px", margin: "3px" },
                      })
        ),
        state.open !== true
            ? null
            : CreateElement_(
                  "div",
                  {
                      className: Classes_.COLLAPSE_VIEW_CONTENT,
                      style: props.contentStyle,
                  },
                  ...LoadContent_(props.content)
              )
    );
}

function TabbedWindow_(properties) {
    let [state, setState] = React.useState({
            currentTabIndex: properties.currentTabIndex || 0,
        }),
        props = LoadDefaultProperties_(
            {
                content: null,
                titleBarStyle: {},
                titleStyle: {},
                contentStyle: {},
                onTabSelection: () => {},
            },
            properties
        );
    return CreateElement_(
        "div",
        {
            className:
                (props.className || "") +
                " " +
                (props.vertical === true
                    ? Classes_.VERTICAL_TABBED_WINDOW
                    : Classes_.TABBED_WINDOW),
            ...RemoveFields_(props, ["className"]),
        },
        CreateElement_(
            "div",
            {
                className:
                    props.vertical === true
                        ? Classes_.VERTICAL_TABBED_WINDOW_TITLE_BAR
                        : {
                              left: Classes_.TABBED_WINDOW_TITLE_BAR,
                              center: Classes_.TABBED_WINDOW_TITLE_BAR_CENTERED,
                              right: Classes_.TABBED_WINDOW_TITLE_BAR_RIGHT,
                          }[props.tabsLocation] ||
                          Classes_.TABBED_WINDOW_TITLE_BAR,
                style: props.titleBarStyle,
            },
            ...LoadContent_(props.tabs).map((tab, index) => {
                return CreateElement_(
                    "div",
                    {
                        className:
                            index === state.currentTabIndex
                                ? Classes_.TABBED_WINDOW_TITLE_ACTIVE
                                : Classes_.TABBED_WINDOW_TITLE,
                        onClick: (event) => {
                            event.stopPropagation();
                            setState({
                                currentTabIndex: index,
                            });
                            props.onTabSelection(index);
                        },
                        style: props.titleStyle,
                    },
                    tab.title
                );
            })
        ),
        CreateElement_(
            "div",
            {
                className: Classes_.TABBED_WINDOW_CONTENT,
                style: props.contentStyle,
            },
            IsNull_(LoadContent_(props.tabs)[state.currentTabIndex])
                ? null
                : LoadContent_(props.tabs)[state.currentTabIndex].content
        )
    );
}

function NavigationBar_(properties) {
    let [state, setState] = React.useState({
            drawerOpen: false,
            menuOpen: false,
        }),
        props = LoadDefaultProperties_(
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
    return CreateElement_(
        "div",
        {
            className: (props.className || "") + " " + Classes_.NAVIGATION_BAR,
            ...RemoveFields_(props, ["className"]),
        },
        LoadContent_(props.drawerContent).length < 1
            ? null
            : CreateElement_(
                  "div",
                  {
                      onClick: (event) => {
                          event.stopPropagation();
                          setState({
                              drawerOpen: !state.drawerOpen,
                          });
                      },
                  },
                  IsNull_(props.drawerButton)
                      ? BiMenu({ style: { fontSize: "35px", margin: "5px" } })
                      : props.drawerButton
              ),
        ...LoadContent_(props.content),
        LoadContent_(props.menuContent).length < 1
            ? null
            : CreateElement_(
                  "div",
                  {
                      onClick: (event) => {
                          event.stopPropagation();
                          setState({
                              menuOpen: !state.menuOpen,
                          });
                      },
                  },
                  IsNull_(props.menuButton)
                      ? BiMenu({ style: { fontSize: "35px", margin: "5px" } })
                      : props.menuButton
              ),
        (LoadContent_(props.drawerContent).length < 1 &&
            LoadContent_(props.menuContent).length < 1) ||
            (state.drawerOpen === false && state.menuOpen === false)
            ? null
            : CreateElement_(
                  "div",
                  {
                      className: Classes_.NAVIGATION_BAR_NAVIGATION_WINDOW,
                      onClick: (event) => {
                          event.stopPropagation();
                          setState({
                              drawerOpen: false,
                              menuOpen: false,
                          });
                      },
                      style: props.navigationWindowStyle,
                  },
                  state.drawerOpen !== true
                      ? null
                      : CreateElement_(
                            "div",
                            {
                                className:
                                    Classes_.NAVIGATION_BAR_DRAWER_WINDOW,
                                onClick: (event) => {
                                    event.stopPropagation();
                                },
                                style: props.drawerWindowStyle,
                            },
                            ...LoadContent_(props.drawerContent)
                        ),
                  state.menuOpen !== true
                      ? null
                      : CreateElement_(
                            "div",
                            {
                                className: Classes_.NAVIGATION_BAR_MENU_WINDOW,
                                onClick: (event) => {
                                    event.stopPropagation();
                                },
                                style: props.menuWindowStyle,
                            },
                            ...LoadContent_(props.menuContent)
                        )
              )
    );
}

function CustomElement_(
    tag,
    customClass,
    customProperties,
    properties,
    ...children
) {
    let className = NotNull_(properties.className)
            ? [customClass, properties.className].join(" ")
            : customClass,
        style = {
            ...(customProperties.style || {}),
            ...(properties.style || {}),
        };
    return CreateElement_(
        tag,
        {
            ...customProperties,
            ...properties,
            className: className,
            style: style,
        },
        ...children
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

export function CreateElement(tag, properties, ...children) {
    return CreateElement_(tag, properties, ...children);
}

export function Render(element, htmlElement) {
    return Render_(element, htmlElement);
}

export function Store(defaultState) {
    return Store_(defaultState);
}

export function Button(properties) {
    return CustomElement_(
        "div",
        Classes_.BUTTON,
        {},
        properties,
        properties.text
    );
}

export function IconButton(properties) {
    return CustomElement_(
        "div",
        Classes_.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text
    );
}

export function Label(properties) {
    return CustomElement_(
        "span",
        Classes_.LABEL,
        {},
        properties,
        properties.text
    );
}

export function Paragraph(properties) {
    return CustomElement_(
        "p",
        Classes_.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}

export function Icon(properties) {
    return CustomElement_("i", Classes_.ICON, {}, properties);
}

export function Heading1(properties) {
    return CustomElement_(
        "h1",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading2(properties) {
    return CustomElement_(
        "h2",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading3(properties) {
    return CustomElement_(
        "h3",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading4(properties) {
    return CustomElement_(
        "h4",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading5(properties) {
    return CustomElement_(
        "h5",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading6(properties) {
    return CustomElement_(
        "h6",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Link(properties, ...children) {
    return CustomElement_("a", Classes_.LINK, {}, properties, ...children);
}

export function ImageView(properties) {
    return CustomElement_("img", Classes_.IMAGE_VIEW, {}, properties);
}

export function VideoView(properties, ...children) {
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

export function AudioView(properties, ...children) {
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

export function TextInput(properties) {
    return CustomElement_(
        "input",
        Classes_.TEXT_INPUT,
        {
            type: "text",
        },
        properties
    );
}

export function NumberInput(properties) {
    return CustomElement_(
        "input",
        Classes_.NUMBER_INPUT,
        {
            type: "number",
        },
        properties
    );
}

export function WeekInput(properties) {
    return CustomElement_(
        "input",
        Classes_.WEEK_INPUT,
        {
            type: "week",
        },
        properties
    );
}

export function TimeInput(properties) {
    return CustomElement_(
        "input",
        Classes_.TIME_INPUT,
        {
            type: "time",
        },
        properties
    );
}

export function MonthInput(properties) {
    return CustomElement_(
        "input",
        Classes_.MONTH_INPUT,
        {
            type: "month",
        },
        properties
    );
}

export function DatetimeInput(properties) {
    return CustomElement_(
        "input",
        Classes_.DATETIME_INPUT,
        {
            type: "datetime-local",
        },
        properties
    );
}

export function DateInput(properties) {
    return CustomElement_(
        "input",
        Classes_.DATE_INPUT,
        {
            type: "date",
        },
        properties
    );
}

export function TextArea(properties) {
    return CustomElement_(
        "textarea",
        Classes_.TEXT_AREA,
        {
            rows: 5,
        },
        properties
    );
}

export function PasswordInput(properties) {
    return CustomElement_(
        "input",
        Classes_.PASSWORD_INPUT,
        {
            type: "password",
        },
        properties
    );
}

export function ColorInput(properties) {
    return CustomElement_(
        "input",
        Classes_.COLOR_INPUT,
        {
            type: "color",
        },
        properties
    );
}

export function FileInput(properties) {
    return CustomElement_(
        "input",
        Classes_.FILE_INPUT,
        {
            type: "file",
        },
        properties
    );
}

export function Selection(properties, ...options) {
    return CustomElement_(
        "select",
        Classes_.SELECTION,
        {},
        properties,
        ...options
    );
}

export function Option(properties) {
    return CustomElement_(
        "option",
        Classes_.OPTION,
        {},
        properties,
        properties.text || ""
    );
}

export function ProgressBar(properties) {
    return CustomElement_("progress", Classes_.PROGRESS_BAR, {}, properties);
}

export function Slider(properties) {
    return CustomElement_(
        "input",
        Classes_.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export function ProgressIndicator(properties) {
    return CustomElement_("div", Classes_.PROGRESS_INDICATOR, {}, properties);
}

export function MenuBar(properties, ...menus) {
    return CustomElement_("div", Classes_.MENU_BAR, {}, properties, ...menus);
}

export function MenuItem(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.MENU_ITEM,
        {},
        properties,
        ...children
    );
}

export function Canvas(properties) {
    return CustomElement_("cavas", Classes_.CANVAS, {}, properties);
}

export function UnorderedList(properties, ...listItems) {
    return CustomElement_(
        "ul",
        Classes_.UNORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function OrderedList(properties, ...listItems) {
    return CustomElement_(
        "ol",
        Classes_.ORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function ListItem(properties, ...children) {
    return CustomElement_(
        "li",
        Classes_.LIST_ITEM,
        {},
        properties,
        ...children
    );
}

export function Table(properties, ...children) {
    return CustomElement_("table", Classes_.TABLE, {}, properties, ...children);
}

export function TableHeading(properties, ...children) {
    return CustomElement_(
        "thead",
        Classes_.TABLE_HEADING,
        {},
        properties,
        ...children
    );
}

export function TableFooter(properties, ...children) {
    return CustomElement_(
        "tfoot",
        Classes_.TABLE_FOOTER,
        {},
        properties,
        ...children
    );
}

export function TableBody(properties, ...children) {
    return CustomElement_(
        "tbody",
        Classes_.TABLE_BODY,
        {},
        properties,
        ...children
    );
}

export function TableRow(properties, ...children) {
    return CustomElement_(
        "tr",
        Classes_.TABLE_ROW,
        {},
        properties,
        ...children
    );
}

export function TableData(properties, ...children) {
    return CustomElement_(
        "td",
        Classes_.TABLE_DATA,
        {},
        properties,
        ...children
    );
}

export function TableHeader(properties, ...children) {
    return CustomElement_(
        "th",
        Classes_.TABLE_HEADER,
        {},
        properties,
        ...children
    );
}

export function Caption(properties, ...children) {
    return CustomElement_(
        "caption",
        Classes_.CAPTION,
        {},
        properties,
        ...children
    );
}

export function Embed(properties, ...children) {
    return CustomElement_("embed", Classes_.EMBED, {}, properties, ...children);
}

export function Iframe(properties, ...children) {
    return CustomElement_(
        "iframe",
        Classes_.IFRAME,
        {},
        properties,
        ...children
    );
}

export function VerticalLayout(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.VERTICAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function HorizontalLayout(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.HORIZONTAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function FlowLayout(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.FLOW_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function GridLayout(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.GRID_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function RelativeLayout(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.RELATIVE_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function ScrollWindow(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function VerticalScrollWindow(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.VERTICAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function HorizontalScrollWindow(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.HORIZONTAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function FooterBar(properties, ...children) {
    return CustomElement_(
        "div",
        Classes_.FOOTER_BAR,
        {},
        properties,
        ...children
    );
}

export function Activity(properties) {
    return CustomElement_(
        "div",
        Classes_.ACTIVITY,
        {
            style: {
                paddingTop: IsNull_(properties.navigationBar) ? "0px" : "50px",
                paddingBottom: IsNull_(properties.footerBar) ? "0px" : "60px",
            },
        },
        properties,
        ...LoadContent_(properties.content),
        properties.footerBar,
        properties.navigationBar
    );
}

export function SelectionView(properties) {
    return CreateElement_(SelectionView_, properties);
}

export function Switch(properties) {
    return CreateElement_(Switch_, properties);
}

export function CheckButton(properties) {
    return CreateElement_(CheckButton_, properties);
}

export function RadioGroup(properties) {
    return CreateElement_(RadioGroup_, properties);
}

export function Menu(properties) {
    return CreateElement_(Menu_, properties);
}

export function CollapseView(properties) {
    return CreateElement_(CollapseView_, properties);
}

export function TabbedWindow(properties) {
    return CreateElement_(TabbedWindow_, properties);
}

export function NavigationBar(properties) {
    return CreateElement_(NavigationBar_, properties);
}

export function ApplicationV1(properties) {
    let application = {
        baseElement: properties.baseElement || document.body,
        hashUpdateActive: true,
        router:
            properties.router ||
            function () {
                return null;
            },
        showActivity(activity, title) {
            Render_(activity, this.baseElement);
            if (NotNull_(title)) {
                this.hashUpdateActive = false;
                window.location.hash = title;
                setTimeout(() => {
                    this.hashUpdateActive = true;
                }, 1500);
            }
        },
        openActivity(title) {
            window.location.hash = title;
        },
    };
    window.addEventListener("hashchange", () => {
        if (application.hashUpdateActive !== true) {
            return;
        }
        let title = window.location.hash.slice(1),
            activity = application.router(title);
        if (NotNull_(activity)) {
            application.showActivity(activity, null);
        }
    });
    return application;
}

export function ApplicationV2(properties) {
    let application = {
        baseElement: properties.baseElement || document.body,
        pathUpdateActive: true,
        router:
            properties.router ||
            function () {
                return null;
            },
        showActivity(activity, path) {
            Render_(activity, this.baseElement);
            if (NotNull_(path)) {
                history.pushState({}, "", path);
            }
        },
        openActivity(path) {
            let activity = this.router(path);
            if (NotNull_(activity)) {
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

export function showDialog(properties) {
    CloseDialogs();
    let content = LoadContent_(properties.content),
        dialogId = GetUniqueId_();
    let baseElement = document.createElement("div"),
        element = CreateElement_(
            "div",
            {
                className: Classes_.DIALOG,
                onClick: (event) => {
                    event.stopPropagation();
                },
                style: properties.style || {},
            },
            properties.splash === true
                ? null
                : CreateElement_(
                      "div",
                      {
                          className: Classes_.DIALOG_TITLE_BAR,
                          style: properties.titleBarStyle || {},
                      },
                      properties.icon ||
                          BiInfoSquare({
                              style: { fontSize: "25px", margin: "5px" },
                          }),
                      CreateElement_(
                          "span",
                          {
                              className: Classes_.DIALOG_TITLE,
                          },
                          properties.title || "..."
                      ),
                      properties.closeButton ||
                          BiXCircle({
                              style: { fontSize: "25px", margin: "5px" },
                              onClick: (event) => {
                                  event.stopPropagation();
                                  CloseDialog(dialogId);
                              },
                          })
                  ),
            ...content
        );
    baseElement.classList.add(Classes_.DIALOG_WINDOW);
    baseElement.setAttribute("dialog-id", dialogId);
    if (properties.closeOnClickOutside === true) {
        baseElement.addEventListener("click", () => {
            CloseDialog(dialogId);
        });
    }
    document.body.appendChild(baseElement);
    Render_(element, baseElement);
    if (
        NotNull_(properties.duration) &&
        typeof properties.duration === "number"
    ) {
        setTimeout(() => {
            CloseDialog(dialogId);
        }, properties.duration);
    }
    return dialogId;
}

export function closeDialog(dialogId) {
    let element = document.querySelector(`[dialog-id="${dialogId}"]`);
    if (NotNull_(element)) {
        element.parentNode.removeChild(element);
    }
}

export function showNotification(properties) {
    CloseNotifications();
    let content = LoadContent_(properties.content),
        notificationId = GetUniqueId_();
    let baseElement = document.createElement("div"),
        element = CreateElement_(
            "div",
            {
                className: Classes_.NOTIFICATION,
                onClick: (event) => {
                    event.stopPropagation();
                },
                ...properties,
            },
            ...content
        );
    baseElement.setAttribute("notification-id", notificationId);
    document.body.appendChild(baseElement);
    Render_(element, baseElement);
    setTimeout(() => {
        CloseNotification(notificationId);
    }, properties.duration || 3000);
    return notificationId;
}

export function closeNotification(notificationId) {
    let element = document.querySelector(
        `[notification-id="${notificationId}"]`
    );
    if (NotNull_(element)) {
        element.parentNode.removeChild(element);
    }
}

export function showToast(properties) {
    CloseToasts();
    if (IsNull_(properties.text)) {
        return;
    }
    let toastId = GetUniqueId_(),
        baseElement = document.createElement("div");
    baseElement.classList.add(Classes_.TOAST);
    baseElement.setAttribute("toast-id", toastId);
    baseElement.textContent = properties.text;
    Object.assign(baseElement.style, properties.style || {});
    document.body.appendChild(baseElement);
    setTimeout(() => {
        CloseToast(toastId);
    }, properties.duration || 3000);
    return toastId;
}

export function closeToast(toastId) {
    let element = document.querySelector(`[toast-id="${toastId}"]`);
    if (NotNull_(element)) {
        element.parentNode.removeChild(element);
    }
}

export function closeDrawers() {
    window.dispatchEvent(
        new CustomEvent(CustomEvents_.CLOSE_DRAWERS_REQUEST, { detail: {} })
    );
}

export function closeDialogs() {
    document.querySelectorAll("[dialog-id]").forEach((element) => {
        element.parentNode.removeChild(element);
    });
}

export function closeNotifications() {
    document.querySelectorAll("[notification-id]").forEach((element) => {
        element.parentNode.removeChild(element);
    });
}

export function closeToasts() {
    document.querySelectorAll("[toast-id]").forEach((element) => {
        element.parentNode.removeChild(element);
    });
}

export function getUniqueId() {
    return GetUniqueId_();
}

export function getWindowDimensions() {
    return GetWindowDimensions_();
}

export function getElementDimensions(element) {
    return GetElementDimensions_(element);
}

export function getConstants() {
    return {
        Colors: Colors_,
        Classes: Classes_,
    };
}
