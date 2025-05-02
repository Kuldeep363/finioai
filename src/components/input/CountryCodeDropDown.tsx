import React, { useRef, useState } from "react";
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { countries } from "@/lib/utils";
interface InputProps {
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
    errMsg?: string;
    code: string;
    onCodeChange: (code: string) => void;
}
const PhoneNumberInput: React.FC<InputProps> = ({
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
    code,
    onCodeChange,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const list = useRef(null);
    useOutsideClick(list, () => {
        setDropdownOpen(false);
    });

    return (
        <div className="flex items-center relative">
            <button
                type="button"
                className={clsx(
                    "py-4 shrink-0 z-10 inline-flex items-center pl-3 pr-1 max-w-[70px] text-sm border border-1 rounded-[15px] rounded-tr-none rounded-br-none border-r-0 bg-gray-50 border-[#00000033]",
                    {
                        "border-red": error,
                    }
                )}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span>{code}</span>
                <span className="ml-1">
                    <ArrowDown2
                        size={14}
                        variant="Bold"
                        color="hsl(var(--primary))"
                    />
                </span>
            </button>
            {dropdownOpen && (
                <div
                    ref={list}
                    className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg shadow-sm w-52 mt-1 z-20"
                >
                    <ul className="py-2 text-sm max-h-[250px] overflow-scroll">
                        {countries.map((country) => (
                            <li key={`${country.code}_${country.name}`}>
                                <button
                                    type="button"
                                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        onCodeChange(country.code);
                                    }}
                                >
                                    <span className="mr-2">{country.flag}</span>{" "}
                                    {country.name} ({country.code})
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <input
                type="tel"
                id="phone-input"
                className={clsx(
                    "peer block w-full px-3 py-4 text-sm bg-transparent border border-1 rounded-[15px] rounded-tl-none rounded-bl-none border-l-0 border-[#00000033] focus:outline-none",
                    inputClassName,
                    {
                        "border-red": error,
                    }
                )}
                value={value}
                name={name}
                onChange={onChange}
                onFocus={() => {}}
                placeholder={placeholder}
            />
            <small className="absolute z-10 -bottom-5 left-2 text-red">
                {errMsg}
            </small>
        </div>
    );
};

export default PhoneNumberInput;
