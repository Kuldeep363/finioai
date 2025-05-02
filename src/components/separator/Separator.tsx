import clsx from "clsx";
import React, { HTMLProps } from "react";
import Line from "../line/Line";
import TextNormal, { TextNormalProps } from "../text/TextNormal";

interface Separator {
    lineClassName?: HTMLProps<HTMLElement>["className"];
    containerClassName?: HTMLProps<HTMLElement>["className"];
    textProps: TextNormalProps;
    position?: "left" | "center" | "right";
    lineColor?: string;
    lineSize?: string;
}

const Separator: React.FC<Separator> = ({
    lineClassName = "",
    lineColor = "#000000",
    lineSize = "1px",
    textProps,
    position,
    containerClassName
}) => {

    if (position == "center") {
        return <div className={clsx(" flex items-center gap-x-4", containerClassName)}>
            <Line color={lineColor} size={lineSize} className={lineClassName} />
            <TextNormal {...textProps} />
            <Line color={lineColor} size={lineSize} className={lineClassName} />
        </div>
    } else {
        return (
            <div className={clsx("flex items-center gap-x-4 ", containerClassName, position == "left" ? "flex-row " : "flex-row-reverse ")}>
                <TextNormal {...textProps} as="span" />
                <Line color={lineColor} size={lineSize} className={lineClassName} />
            </div>
        );
    }


};

export default Separator;
