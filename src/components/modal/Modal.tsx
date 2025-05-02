"use client"
import clsx from "clsx";
import { CloseCircle } from "iconsax-react";
import { CSSProperties, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    style?: CSSProperties;
    children: React.ReactNode;
    className?: string;
    closeBtn?: boolean;
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    style,
    className,
    closeBtn = false,
}: ModalProps) {
    const handleClose = (e: any) => {
        if (!closeBtn) {
            e.stopPropagation();
            if (onClose) {
                onClose();
            }
        }
    };
    useEffect(() => {
        // Close on Esc key
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleClose(event);
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.classList.add("overflow-hidden"); // Prevent background scroll
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalRoot = document.getElementById("modal-root");

    return createPortal(
        <div
            className={clsx(
                "fixed inset-0 z-[1000000000] flex items-center justify-center flex-col bg-[#000000e6] bg-opacity-50 transition-all duration-300",
                {
                    "opacity-100": isOpen,
                    "opacity-0": !isOpen,
                }
            )}
            onClick={handleClose} // Close on backdrop click
        >
            {closeBtn ? (
                <div
                    className="mb-3 cursor-pointer shadow-xl"
                    onClick={onClose}
                >
                    <CloseCircle size={24} color="#fefefe" variant="Bold" />
                </div>
            ) : null}
            <div
                className={clsx(
                    "bg-white rounded-3xl shadow-xl  max-w-4xl p-6 relative transform transition-all duration-300",
                    {
                        "scale-100 opacity-100": isOpen,
                        "scale-95 opacity-0": !isOpen,
                    },
                    className
                )}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                style={style}
            >
                {/* Modal Title */}
                {title && (
                    <h2 className="text-xl font-semibold mb-4">{title}</h2>
                )}

                {/* Modal Content */}
                {children}
            </div>
            {/* Close Button */}
        </div>,
        modalRoot as Element
    );
}
