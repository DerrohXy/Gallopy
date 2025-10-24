import { CustomElement, LoadContent } from "../core";
import { Classes } from "../core";

export type ActivityProps = React.HTMLAttributes<HTMLDivElement> & {
    navigationBar?: any;
    footerBar?: any;
};

export function Activity(properties: ActivityProps) {
    return CustomElement(
        "div",
        Classes.ACTIVITY,
        {
            style: {
                paddingTop: !properties.navigationBar ? "0px" : "50px",
                paddingBottom: !properties.footerBar ? "0px" : "60px",
            },
        },
        properties,
        ...LoadContent(properties.content),
        properties.footerBar,
        properties.navigationBar
    );
}
