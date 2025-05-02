import { ToastInterface } from "@/definition";
import { Information, TickCircle, Warning2 } from "iconsax-react";
import toast from "react-hot-toast";

export const getToast = (params: ToastInterface): string | undefined => {
    const toastOptions = {
        duration: params.duration || 2000,
        position: params.position || "bottom-center",
        className: params.className || "",
        removeDelay: params.removeDelay || 0,
    };
    switch (params.type) {
        case "blank":
            return toast(params.message, {
                ...toastOptions,
                style: { ...(params.style || {}) },
                id: params.id,
            });
        case "error":
            return toast.error(params.message, {
                ...toastOptions,
                style: {
                    ...(params.style || {}),
                    backgroundColor: "var(--red)",
                    color: "#fefefe",
                },
                icon: <Warning2 size="16" color="#fefefe" variant="Bold" />,
                id: params.id,
            });
        case "success":
            return toast.success(params.message, {
                ...toastOptions,
                style: {
                    ...(params.style || {}),
                    backgroundColor: "var(--green)",
                    color: "#fefefe",
                },
                icon: <TickCircle size="16" color="#fefefe" variant="Bold" />,
                id: params.id,
            });
        case "loading":
            return toast.loading(params.message, {
                ...toastOptions,
                duration: Infinity,
                id: params.id,
            });
        case "warning":
            toast(params.message, {
                ...toastOptions,
                style: {
                    ...(params.style || {}),
                    ...{ background: "var(--yellow)", color: "white" },
                },
                icon: <Information size="16" color="#fefefe" variant="Bold" />,
                id: params.id,
            });
        default:
            return "";
    }
};
export const removeLoadingToast = (id: string | undefined) => {
    toast.dismiss(id);
};
