import clsx from "clsx";
import React, { FocusEventHandler } from "react";

interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    containerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    error?: boolean;
    onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
    errMsg?: string;
}

const InputWithLabel: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    name,
    type = "text",
    placeholder = "",
    required = false,
    containerClassName = "",
    inputClassName = "",
    labelClassName = "",
    error = false,
    errMsg = "",
    onFocus
}) => {
    return (
        <div className={clsx("relative", containerClassName)}>
            <input
                type={type}
                id={label}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={clsx(
                    "peer block w-full px-3 py-4 text-sm bg-transparent border border-1 rounded-[15px] border-[#00000033] focus:outline-none focus:ring-0 transition-all",
                    inputClassName,
                    {
                        "border-red": error,
                    }
                )}
                onFocus={onFocus}
            />
            <small className="text-[10px]">{errMsg}</small>

            <label
                htmlFor={label}
                className={clsx(
                    "absolute bg-white px-1 text-sm text-gray-500 left-3 -top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-xs",
                    labelClassName,
                    {
                        "text-red": error,
                    }
                )}
            >
                {label}
            </label>
        </div>
    );
};

export default InputWithLabel;
