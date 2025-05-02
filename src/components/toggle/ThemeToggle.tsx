import clsx from "clsx";
import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({
    onClick,
    isDarkmode,
}: {
    onClick: () => void;
    isDarkmode: boolean;
}) => {
    return (
        <span
            id="darkmode"
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onClick}
        >
            <div
                className={clsx("darkmode_icon", {
                    dark: isDarkmode,
                })}
            >
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
            </div>
        </span>
    );
};

export default ThemeToggle;
