import React, { HTMLProps } from 'react';
import TextNormal, { TextNormalProps } from '../text/TextNormal';

interface InputWithTitleProps {
    title: string; // The title displayed above the input
    value: string; // The current value of the input
    onChange: (value: string, key: string) => void; // Callback when the input value changes
    name: string //name of the key in the form state
    placeholder?: string; // Placeholder text for the input
    type?: 'text' | 'password' | 'email' | 'tel'; // Input type
    error?: string; // Error message to display
    isRequired?: boolean; // Whether the input is required
    className?: HTMLProps<HTMLElement>["className"];  // Custom class name for styling
    inputStyle?: React.CSSProperties; // Inline styles for the input
    titleStyle?: React.CSSProperties; // Inline styles for the title
    errorStyle?: React.CSSProperties; // Inline styles for the error message
    titleProps: TextNormalProps;
    inputClassName?: HTMLProps<HTMLElement>["className"]; // Custom class name
}

const InputWithTitle: React.FC<InputWithTitleProps> = ({
    title,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    error,
    isRequired = false,
    className = '',
    inputStyle = {},
    titleStyle = {},
    errorStyle = {},
    titleProps,
    inputClassName,
    name

}) => {
    return (
        <div className={`input-with-title ${className} w-[100%]`}>

            <TextNormal {...titleProps} className=' font-circular_450 sm:text-[14px] m-0 mb-2 p-0' style={{ ...titleProps?.style }}>
                {title}
            </TextNormal>

            {/* Input */}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value,name)}
                placeholder={placeholder}
                className={' font-circular_700 sm:text-[18px] text-blackcolor w-[100%] p-[8px] rounded-[4px]' + inputClassName}
                style={{
                    border: error ? '1px solid red' : '1px solid #ccc',
                    outlineColor: '#ff327f',
                    ...inputStyle,
                }}
                name={name}
            />

            {/* Error Message */}
            {error && (
                <span
                    style={{
                        color: 'red',
                        fontSize: '12px',
                        marginTop: '5px',
                        display: 'block',
                        ...errorStyle,
                    }}
                >
                    {error}
                </span>
            )}
        </div>
    );
};

export default InputWithTitle;
