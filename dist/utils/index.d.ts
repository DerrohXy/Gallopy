import { CSSProperties } from "react";
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
export declare function showDialog(properties: ShowDialogProps): string;
export declare function closeDialog(dialogId: string): void;
type ShowNotificationProps = {
    duration?: number;
    content: Array<any> | any;
};
export declare function showNotification(properties: ShowNotificationProps): string;
export declare function closeNotification(notificationId: string): void;
type ShowToastProps = {
    text: string;
    duration?: number;
    style?: CSSProperties;
};
export declare function showToast(properties: ShowToastProps): string | null;
export declare function closeToast(toastId: string): void;
export declare function closeDrawers(): void;
export declare function closeDialogs(): void;
export declare function closeNotifications(): void;
export declare function closeToasts(): void;
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
/**
 * Constructor for a CurlUIStore,a watchable properties object,
 * listeners can be bound to it for each time the state of the store chages.
 * @param state The initial state of the store.
 * @returns The store object.
 */
export declare function Store(defaultState: GLStoreState): GLStore;
export {};
//# sourceMappingURL=index.d.ts.map