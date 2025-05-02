import React, { HTMLProps } from 'react';
import TextNormal, { TextNormalProps } from '../text/TextNormal';

interface ButtonWithRightComponentProps {
    onClick?: () => void; // Click handler
    gradientBackground?: string; // Gradient CSS (e.g., 'linear-gradient(to right, red, blue)')
    backgroundColor?: string; // Normal background color
    textColor?: string; // Text color
    borderRadius?: string; // Border radius (e.g., '8px', '50%')
    padding?: string; // Padding (e.g., '10px 20px')
    rightComponent?: React.ReactNode; // Optional right-side component (e.g., icon or badge)
    style?: React.CSSProperties; // Additional inline styles
    className?: HTMLProps<HTMLElement>["className"]; // Custom class name
    buttonTextProps: TextNormalProps
}

const ButtonWithRightComponent: React.FC<ButtonWithRightComponentProps> = ({

    onClick,
    gradientBackground,
    backgroundColor = '#007BFF', // Default color
    textColor = '#FFFFFF', // Default text color
    borderRadius = '4px',
    padding = '10px 20px',
    rightComponent,
    style = {},
    className,
    buttonTextProps
}) => {
    return (
        <button
            onClick={onClick}

            style={{
                background: gradientBackground || backgroundColor,
                color: textColor,

                borderRadius,
                padding,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                ...style,
            }}
            className={className}
        >
            <TextNormal {...buttonTextProps} />
            {rightComponent && <span style={{ marginLeft: '8px' }}>{rightComponent}</span>}
        </button>
    );
};

export default ButtonWithRightComponent;
