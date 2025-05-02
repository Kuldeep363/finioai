import { CSSProperties } from "react"
import { ToastPosition } from "react-hot-toast"

export interface ToastInterface {
    type: "blank" | "error" | "success" | "loading" | "warning";
    message: string;
    duration?: number;
    position?: ToastPosition;
    style?: CSSProperties | undefined;
    className?: string | undefined;
    icon?: string | symbol | null;
    removeDelay?: number;
    id?: string | undefined;
}

export interface IconInterface {
    size: 12 | 16 | 24 | 32 | 44 | 60 | 80;
    color: string,
    style: CSSProperties
}