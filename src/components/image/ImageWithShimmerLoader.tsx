// components/ShimmerImage.tsx
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

interface ImageWithShimmerLoaderProps extends ImageProps {
    shimmerColor?: string; // Shimmer base color
    shimmerHighlight?: string; // Shimmer highlight color
    animationDuration?: string; // Animation duration (e.g., "1.5s")
    borderRadius?: string | number; // Border radius for the shimmer and image
    containerClassName?: string;
    containerStyle?: any;
}

const ImageWithShimmerLoader: React.FC<ImageWithShimmerLoaderProps> = ({
    shimmerColor = "#f0f0f0",
    shimmerHighlight = "#e0e0e0",
    animationDuration = "1.5s",
    borderRadius = "8px",
    containerClassName,
    style: imageStyle,
    containerStyle,
    ...imageProps
}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <span
            className={`relative ${containerClassName}`}
            style={{
                overflow: "hidden",
                ...containerStyle,
            }}
        >
            {/* Shimmer Effect */}
            {isLoading && (
                <span
                    className="animated"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        maxWidth: "100vw",
                        background: `linear-gradient(
                          90deg,
                          ${shimmerColor} 25%,
                          ${shimmerHighlight} 50%,
                          ${shimmerColor} 75%
                        )`,
                    }}
                />
            )}

            {/* Optimized Next.js Image */}
            <Image
                {...imageProps}
                src={
                    imageProps.src ||
                    "https://assets.truefanb2b.in/demo_1740998545616.webp"
                }
                onLoadingComplete={() => setIsLoading(false)}
                style={{
                    transition: "opacity 0.3s ease",
                    opacity: isLoading ? 0 : 1,
                    borderRadius:
                        typeof borderRadius === "number"
                            ? `${borderRadius}px`
                            : borderRadius,
                    ...imageStyle,
                }}
                unoptimized
            />

            {/* Keyframe Animation */}
        </span>
    );
};

export default ImageWithShimmerLoader;
