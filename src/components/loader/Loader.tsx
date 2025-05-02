import React, { HTMLProps } from "react";
import CircularLoader from "../loaders/CircularLoader";

const Loader = ({
    className,
}: {
    className?: HTMLProps<HTMLElement>["className"];
}) => {
    return (
        <div
            className={`absolute inset-0 z-10 flex flex-1 items-center justify-center ${className}`}
        >
            <CircularLoader color="hsl(var(--primary))" size="size-12" />
        </div>
    );
};

export default Loader;
