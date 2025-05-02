import clsx from "clsx";
import React from "react";

interface SelectOption {
    value: string; // actual value
    label?: string; // label
    icon?: string; // icon emoji or image URL
}

interface InputWithOptionsProps {
    label: string;
    value: string;
    onChange: (key: string, value: string) => void;
    options: SelectOption[];
    selectedOption: string;
    placeholder?: string;
    required?: boolean;
    name?: string;
    containerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
}

const InputWithOptions: React.FC<InputWithOptionsProps> = ({
    label,
    value,
    onChange,
    options,
    selectedOption,
    placeholder = "",
    name,
    required = false,
    containerClassName,
    inputClassName,
    labelClassName,
}) => {
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange("number", e.target.value);
    };
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange("code", e.target.value);
    };
    return (
        <div
            className={clsx(
                "relative flex items-center w-full text-sm bg-transparent border border-1 rounded-[10px] border-[#00000033] focus:outline-none transition-all"
            )}
        >
            {/* Country Code Dropdown */}
            <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="w-1/4 py-3 pl-3 text-sm bg-transparent border-none focus:outline-none"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.icon} {option.label} ({option.value})
                    </option>
                ))}
            </select>

            {/* Phone Number Input */}
            <input
                type="tel"
                value={value}
                onChange={handleNumberChange}
                placeholder={placeholder}
                required={required}
                name={name}
                className={clsx(
                    "peer block w-full py-3 pr-3 text-sm bg-transparent focus:outline-none transition-all",
                    inputClassName
                )}
            />
            <label
                htmlFor={label}
                className={clsx(
                    "absolute pointer-events-none bg-white px-1 text-sm text-gray-500 left-3 -top-4 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs",
                    labelClassName
                )}
            >
                {label}
            </label>
        </div>
    );
};

export default InputWithOptions;
