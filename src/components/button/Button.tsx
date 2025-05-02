"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { PauseCircle, PlayCircle } from "iconsax-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "filled" | "outlined" | "ghost" | "loading";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    onlyIcon?: boolean;
    shadow?: "primary";
    iconClassName?: string;
};

const Button = ({
    variant = "filled",
    icon,
    iconPosition = "left",
    onlyIcon = false,
    className,
    children,
    shadow,
    iconClassName,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                "flex items-center justify-center gap-1 rounded-full py-2 px-6 transition-all font-bold",
                {
                    "bg-[hsl(var(--primary))] text-white hover:bg-[var(--primary-hover)]":
                        variant === "filled" || variant === "loading",
                    "border border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:border-[var(--primary-hover)]":
                        variant === "outlined",
                    "text-[hsl(var(--primary))]": variant === "ghost",
                    "opacity-20 cursor-not-allowed": props.disabled,
                    "cursor-not-allowed pointer-events-none":
                        variant === "loading",
                    "p-0 w-10 h-10": onlyIcon,
                    "shadow-primary_shadow": shadow === "primary",
                },
                className
            )}
            {...props}
        >
            {icon && iconPosition === "left" && (
                <span className={clsx("pr-1", iconClassName)}>{icon}</span>
            )}
            {!onlyIcon && children}
            {icon && iconPosition === "right" && (
                <span className={clsx("pl-1", iconClassName)}>{icon}</span>
            )}
        </button>
    );
};

const AudioButton = ({
    variant = "filled",
    isPlaying,
    onToggle,
    children,
}: {
    variant?: "filled" | "outlined" | "ghost";
    isPlaying: boolean;
    onToggle: () => void;
    children?: ReactNode;
}) => {
    return (
        <Button
            variant={variant}
            icon={
                isPlaying ? (
                    <PauseCircle size="16" color="#fefefe" variant="Bold" />
                ) : (
                    <PlayCircle size="16" color="#fefefe" variant="Bold" />
                )
            }
            iconPosition="right"
            onClick={onToggle}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
            {children}
        </Button>
    );
};

export { Button, AudioButton };
