import { Render } from "../core";
export function Application(properties) {
    let application = {
        baseElement: properties.baseElement || document.body,
        router: properties.router ||
            function () {
                return null;
            },
        openPage(details, replace = false) {
            const queryString = new URLSearchParams(details.params || {}).toString();
            const newUrl = queryString
                ? `${details.path}?${queryString}`
                : details.path;
            if (replace) {
                history.replaceState(null, "", newUrl);
            }
            else {
                history.pushState(null, "", newUrl);
            }
            this.start();
        },
        getCurrentPageDetails() {
            return {
                path: window.location.pathname,
                params: Object.fromEntries(new URLSearchParams(window.location.search)),
            };
        },
        start() {
            let display = application.router(application.getCurrentPageDetails());
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
//# sourceMappingURL=Application.js.map