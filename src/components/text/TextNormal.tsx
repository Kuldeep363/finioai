import React, { CSSProperties, ElementType, HTMLProps } from 'react';

export interface TextNormalProps {
    text: string; // Content to render inside the component
    size?: string; // Font size (e.g., '16px', '1rem')
    color?: string; // Text color
    weight?: string | number; // Font weight (e.g., 'bold', 400)
    align?: 'left' | 'center' | 'right' | 'justify'; // Text alignment
    lineHeight?: string; // Line height
    as?: ElementType; // HTML tag (e.g., 'p', 'span', 'h1')
    className?: HTMLProps<HTMLElement>["className"]; // Custom class name
    style?: CSSProperties; // Inline styles
    [key: string]: any; // Additional props
}

const TextNormal: React.FC<TextNormalProps> = ({
    text = "",
    size = '16px',
    color = '#000',
    weight = 'normal',
    align = 'left',
    lineHeight = '1.5',
    as: Element = 'p',
    className = '',
    style = {},
    ...props
}) => {

    return (
        <Element

            style={{
                color,
                textAlign: align,
                lineHeight,
                ...style,
            }}
            className={className}
            {...props}
        >
            {text}
        </Element>
    );
};

export default TextNormal;
