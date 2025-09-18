import { Render } from "../core";

export type ApplicationRouter = (title: string) => any | null;

export type ApplicationProps = {
    router?: ApplicationRouter;
    baseElement?: HTMLElement;
};

export type Application = {
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

export type ApplicationV2 = {
    baseElement: HTMLElement;
    pathUpdateActive: boolean;
    router: ApplicationRouter;
    showActivity: (activity: any, path: string | null) => void;
    openActivity: (title: string) => void;
};

export function ApplicationV2(properties: ApplicationProps) {
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
