import React, { useState, useEffect, useRef } from "react";
import "./Slider.css"; // Importing CSS file for styling

interface CustomSliderProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
}

const Slider: React.FC<CustomSliderProps> = ({ min, max, value, onChange }) => {
    const [sliderValue, setSliderValue] = useState(value);
    const sliderRef = useRef<HTMLInputElement>(null);

    // Update the slider background dynamically based on the value
    const updateSliderBackground = (value: number) => {
        // console.log(value,min,max)
        const percentage = ((value - min) / (max - min)) * 100;
        if (sliderRef.current) {
            sliderRef.current.style.background = `linear-gradient(to right, hsl(var(--primary)) ${percentage}%, #f7f7f7 ${percentage}%)`;
        }
    };

    // Handle the input change
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setSliderValue(newValue);
        onChange(newValue);
    };

    // Effect to update the background when the value changes
    useEffect(() => {
        updateSliderBackground(sliderValue);
    }, [sliderValue]);

    return (
        <div className="custom-slider-container">
            <input
                ref={sliderRef}
                type="range"
                min={min}
                max={max}
                value={sliderValue}
                onChange={handleSliderChange}
                className="custom-range"
                id="custom-range"
            />
        </div>
    );
};

export default Slider;
