import { LoadContent, GetUniqueId, Classes, Render, CustomEvents, } from "../core";
import React from "react";
function infoIcon_(content) {
    return (React.createElement("div", { style: {
            padding: "10px",
            margin: "5px",
        } }, content || ">"));
}
function closeButton_(onClick, content) {
    return (React.createElement("div", { style: {
            padding: "10px",
            margin: "5px",
        }, 
        // @ts-ignore
        onClick: onClick }, content || "<"));
}
export function showDialog(properties) {
    closeDialogs();
    let content = LoadContent(properties.childContent), dialogId = GetUniqueId(), baseElement = document.createElement("div");
    let iconStyle = { fontSize: "25px", margin: "5px" };
    let element = (React.createElement("div", { className: Classes.DIALOG, 
        // @ts-ignore
        onClick: (event) => {
            event.stopPropagation();
        }, style: properties.style || {} },
        properties.splash ? null : (React.createElement("div", { className: Classes.DIALOG_TITLE_BAR },
            infoIcon_(properties.icon),
            React.createElement("span", { className: Classes.DIALOG_TITLE }, properties.title || "..."),
            closeButton_((event) => {
                event.stopPropagation();
                closeDialog(dialogId);
            }, properties.closeButton))),
        ...content));
    baseElement.classList.add(Classes.DIALOG_WINDOW);
    baseElement.setAttribute("dialog-id", dialogId);
    if (properties.closeOnClickOutside === true) {
        baseElement.addEventListener("click", (event) => {
            if (event.target === baseElement) {
                closeDialog(dialogId);
            }
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
export function closeDialog(dialogId) {
    var _a;
    let element = document.querySelector(`[dialog-id="${dialogId}"]`);
    if (element) {
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    }
}
function getTotalOuterHeightByClass(className) {
    const elements = document.getElementsByClassName(className);
    let totalHeight = 0;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const style = window.getComputedStyle(element);
        const marginTop = parseFloat(style.marginTop) || 0;
        const marginBottom = parseFloat(style.marginBottom) || 0;
        const outerHeight = element.offsetHeight + marginTop + marginBottom;
        totalHeight += outerHeight;
    }
    return totalHeight;
}
export function showNotification(properties) {
    closeNotifications();
    let content = LoadContent(properties.childContent), notificationId = GetUniqueId();
    let existingDisplacement = getTotalOuterHeightByClass(Classes.NOTIFICATION);
    let baseElement = document.createElement("div");
    let element = (React.createElement("div", { className: Classes.NOTIFICATION, 
        // @ts-ignore
        onClick: (event) => {
            event.stopPropagation();
        }, style: existingDisplacement > 0
            ? {
                top: `${existingDisplacement + 10}px`,
            }
            : {} }, ...content));
    baseElement.setAttribute("notification-id", notificationId);
    document.body.appendChild(baseElement);
    Render(element, baseElement);
    setTimeout(() => {
        closeNotification(notificationId);
    }, properties.duration || 3000);
    return notificationId;
}
export function closeNotification(notificationId) {
    var _a;
    let element = document.querySelector(`[notification-id="${notificationId}"]`);
    if (element) {
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    }
}
export function showToast(properties) {
    closeToasts();
    let toastId = GetUniqueId(), baseElement = document.createElement("div");
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
export function closeToast(toastId) {
    var _a;
    let element = document.querySelector(`[toast-id="${toastId}"]`);
    if (element) {
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    }
}
export function closeDrawers() {
    window.dispatchEvent(new CustomEvent(CustomEvents.CLOSE_DRAWERS_REQUEST, { detail: {} }));
}
export function closeDialogs() {
    document.querySelectorAll("[dialog-id]").forEach((element) => {
        var _a;
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    });
}
export function closeNotifications() {
    document.querySelectorAll("[notification-id]").forEach((element) => {
        var _a;
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    });
}
export function closeToasts() {
    document.querySelectorAll("[toast-id]").forEach((element) => {
        var _a;
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    });
}
function Store_(state) {
    return {
        state: state,
        handlers: {},
        getState() {
            return this.state;
        },
        setState(state) {
            this.state = Object.assign(Object.assign({}, this.state), state);
            Object.values(this.handlers).map((handler) => {
                handler(this.state);
            });
        },
        subscribe(handler) {
            let handlerId = GetUniqueId();
            this.handlers[handlerId] = handler;
            return handlerId;
        },
        unsubscribe(handlerId) {
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
export function Store(defaultState) {
    return Store_(defaultState);
}
//# sourceMappingURL=index.js.map