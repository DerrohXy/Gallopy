export type RLStoreState = {
    [key: string]: any;
};

export type RLStoreHandlers = {
    [key: string]: Function;
};

export type RLStore = {
    state: RLStoreState;
    handlers: RLStoreHandlers;
    getState(): RLStoreState;
    setState(state: RLStoreState): void;
    subscribe(handler: Function): string;
    unsubscribe(handlerId: string): void;
};
