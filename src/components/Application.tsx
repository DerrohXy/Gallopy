import { Render } from "../core";

export type PageParams = { [key: string]: string };

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

export function Application(properties: ApplicationProps): Application {
    let application: Application = {
        baseElement: properties.baseElement || document.body,
        router:
            properties.router ||
            function () {
                return null;
            },
        openPage(details: PageDetails, replace: boolean = false) {
            const queryString = new URLSearchParams(
                details.params || {}
            ).toString();
            const newUrl = queryString
                ? `${details.path}?${queryString}`
                : details.path;

            if (replace) {
                history.replaceState(null, "", newUrl);
            } else {
                history.pushState(null, "", newUrl);
            }

            this.start();
        },
        getCurrentPageDetails() {
            return {
                path: window.location.pathname,
                params: Object.fromEntries(
                    new URLSearchParams(window.location.search)
                ),
            };
        },
        start() {
            let display = application.router(
                application.getCurrentPageDetails()
            );

            if (display) {
                Render(display, application.baseElement);
            }
        },
    };

    window.addEventListener("popstate", () => {
        application.start();
    });

    return application;
}
