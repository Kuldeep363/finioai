import React from 'react';
import TextNormal, { TextNormalProps } from './TextNormal';

interface TextHighlightProps {
	text: string; // The main text
	highlight?: string; // The text to highlight
	highlightColor?: string; // Background color for highlighted text
	textColor?: string; // Color of the text
	highlightStyle?: React.CSSProperties; // Custom styles for the highlighted text
	textStyle?: React.CSSProperties; // Custom styles for the main text
	className?: string; // Custom class name
	highlightTextProps: TextNormalProps;
	normalTextProps: TextNormalProps
}

const TextHighlight: React.FC<TextHighlightProps> = ({
	text,
	highlight,
	textColor = '#000',
	highlightTextProps,
	normalTextProps,
	textStyle = {},
	className = '',
}) => {
	if (!highlight) {
		return <span style={{ color: textColor, ...textStyle }}>{text}</span>;
	}

	// Split the text into parts based on the highlight
    const parts = text.split(new RegExp(`(${highlight})`, 'gi')).filter(text=> text !== "");

	return (
		<span className={className} style={textStyle}>
			{parts.map((part, index) =>
				part.toLowerCase() === highlight.toLowerCase() ? (
					<TextNormal
						key={index}
						{...highlightTextProps}
                        as={'span'}
					>
						{part}
					</TextNormal>
				) : (
					<TextNormal key={index} {...normalTextProps} as={'span'}>{part}</TextNormal>
				)
			)}
		</span>
	);
};

export default TextHighlight;
