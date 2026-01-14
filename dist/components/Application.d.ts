export type PageParams = {
    [key: string]: string;
};
export type PageDetails = {
    path: string;
    params?: PageParams;
};
export type ApplicationRouter = (params: PageDetails) => any;
export type ApplicationProps = {
    router?: ApplicationRouter;
    baseElement?: HTMLElement;
};
export type Application = {
    baseElement: HTMLElement;
    router: ApplicationRouter;
    openPage: (details: PageDetails, replace: boolean) => void;
    getCurrentPageDetails: () => PageDetails;
    start: () => void;
};
export declare function Application(properties: ApplicationProps): Application;
//# sourceMappingURL=Application.d.ts.map