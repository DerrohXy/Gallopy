import { CSSProperties } from "react";
import {
    LoadContent,
    GetUniqueId,
    Classes,
    Render,
    CustomEvents,
    CreateElement,
} from "../core";

function dialogIcon_() {
    return CreateElement(
        "div",
        {
            style: {
                padding: "10px",
                margin: "5px",
            },
        },
        ">"
    );
}

function closeButton_(onClick: Function) {
    return CreateElement(
        "div",
        {
            style: {
                padding: "10px",
                margin: "5px",
            },
            onClick: onClick,
        },
        "<"
    );
}

type ShowDialogProps = {
    duration?: number;
    content: Array<any> | any;
    splash?: boolean;
    title?: string;
    closeOnClickOutside?: boolean;
    style?: CSSProperties;
    titleBarStyle?: CSSProperties;
    closeButton?: any;
    icon?: any;
};

export function showDialog(properties: ShowDialogProps) {
    closeDialogs();

    let content = LoadContent(properties.content),
        dialogId = GetUniqueId(),
        baseElement = document.createElement("div");

    let iconStyle = { fontSize: "25px", margin: "5px" };

    let element = CreateElement(
        "div",
        {
            className: Classes.DIALOG,
            onClick: (event: Event) => {
                event.stopPropagation();
            },
            style: properties.style || {},
        },
        properties.splash
            ? null
            : CreateElement(
                  "div",
                  { className: Classes.DIALOG_TITLE_BAR },
                  properties.icon || dialogIcon_(),
                  CreateElement(
                      "span",
                      {
                          className: Classes.DIALOG_TITLE,
                      },
                      properties.title || "..."
                  ),
                  properties.closeButton ||
                      closeButton_((event: Event) => {
                          event.stopPropagation();
                          closeDialog(dialogId);
                      })
              ),
        ...content
    );

    baseElement.classList.add(Classes.DIALOG_WINDOW);
    baseElement.setAttribute("dialog-id", dialogId);

    if (properties.closeOnClickOutside === true) {
        baseElement.addEventListener("click", () => {
            closeDialog(dialogId);
        });
    }
    document.body.appendChild(baseElement);

    Render(element, baseElement);

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

    let content = LoadContent(properties.content),
        notificationId = GetUniqueId();

    let baseElement = document.createElement("div");

    let element = CreateElement(
        "div",
        {
            onClick: (event: Event) => {
                event.stopPropagation();
            },
            className: Classes.NOTIFICATION,
        },
        ...content
    );

    baseElement.setAttribute("notification-id", notificationId);
    document.body.appendChild(baseElement);
    Render(element, baseElement);

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
    style?: CSSProperties;
};

export function showToast(properties: ShowToastProps): string | null {
    closeToasts();

    let toastId = GetUniqueId(),
        baseElement = document.createElement("div");

    baseElement.classList.add(Classes.TOAST);
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
        new CustomEvent(CustomEvents.CLOSE_DRAWERS_REQUEST, { detail: {} })
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

export type GLStoreState = {
    [key: string]: any;
};

export type GLStoreHandlers = {
    [key: string]: Function;
};

export type GLStore = {
    state: GLStoreState;
    handlers: GLStoreHandlers;
    getState(): GLStoreState;
    setState(state: GLStoreState): void;
    subscribe(handler: Function): string;
    unsubscribe(handlerId: string): void;
};

function Store_(state: GLStoreState): GLStore {
    return {
        state: state,
        handlers: {},
        getState() {
            return this.state;
        },
        setState(state: GLStoreState) {
            this.state = {
                ...this.state,
                ...state,
            };

            Object.values(this.handlers).map((handler) => {
                handler(this.state);
            });
        },
        subscribe(handler: Function): string {
            let handlerId = GetUniqueId();
            this.handlers[handlerId] = handler;

            return handlerId;
        },
        unsubscribe(handlerId: string) {
            delete this.handlers[handlerId];
        },
    };
}

/**
 * Constructor for a CurlUIStore,a watchable properties object,
 * listeners can be bound to it for each time the state of the store chages.
 * @param state The initial state of the store.
 * @returns The store object.
 */
export function Store(defaultState: GLStoreState): GLStore {
    return Store_(defaultState);
}
