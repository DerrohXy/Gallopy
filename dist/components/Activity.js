import { CustomElement, LoadContent } from "../core";
import { Classes } from "../core";
export function Activity(properties) {
    return CustomElement("div", Classes.ACTIVITY, {
        style: {
            paddingTop: !properties.navigationBar ? "0px" : "50px",
            paddingBottom: !properties.footerBar ? "0px" : "60px",
        },
    }, properties, ...LoadContent(properties.childContent), properties.footerBar, properties.navigationBar);
}
//# sourceMappingURL=Activity.js.map