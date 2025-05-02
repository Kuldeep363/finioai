import clsx from "clsx";
import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: ReactNode;
    error?: string;
    placeholder?: string;
    containerClassName?: string;
    inputFieldClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    icon,
    error,
    containerClassName,
    inputFieldClassName,
    placeholder = "Enter",
    ...props
}) => {
    return (
        <div className="flex flex-col w-full">
            {/* Optional label */}
            {label && (
                <label className="text-sm font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}

            <div
                className={clsx(
                    "flex items-center border rounded-[15px] p-3",
                    {
                        "border-red-500": error,
                        "border-gray-300": !error,
                    },
                    containerClassName
                )}
            >
                {/* Optional icon */}
                {icon && <span className="text-gray-500">{icon}</span>}

                {/* Input field */}
                <input
                    {...props}
                    className={clsx(
                        "w-full text-sm text-black placeholder-gray-400 focus:outline-none pl-1 font-bold",
                        inputFieldClassName
                    )}
                    placeholder={placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>

            {/* Optional error message */}
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
