import React, { useState, useRef, useEffect } from "react";
import "./Select.css"; // Ensure you have the relevant styles in this CSS file
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-react";

interface Option {
    value: number;
    label: string;
}

interface SelectProps {
    options: Option[];
    defaultValue?: string;
    onChange?: (value: number) => void;
}

const Select: React.FC<SelectProps> = ({
    options,
    defaultValue,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || 1);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value: number) => {
        setSelectedValue(value);
        setIsOpen(false);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="custom-select-container text-xs" ref={dropdownRef}>
            <button
                className={clsx("custom-select-btn", {
                    open: isOpen,
                })}
                onClick={toggleDropdown}
            >
                <span className="selected-option-text">
                    {selectedValue
                        ? options.find(
                              (option) => option.value === selectedValue
                          )?.label
                        : "Select an option"}
                </span>
                <span className="arrow">
                    <ArrowDown2 size="12" color="#fefefe" variant="Bold" />
                </span>
            </button>

            {isOpen && (
                <div className="custom-options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="custom-option"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
