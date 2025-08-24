"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import Lottie, { LottieRef } from "lottie-react";

interface LottieAnimationProps {
  animationData: unknown;
  width?: string | number;
  height?: string | number;
  className?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  speed?: number; // Custom - handled via ref
  direction?: 1 | -1; // Custom - handled via ref
  style?: CSSProperties;
  initialSegment?: [number, number];
  renderer?: "svg" | "canvas" | "html";
  onComplete?: () => void;
  onLoopComplete?: () => void;
  onEnterFrame?: () => void;
  onSegmentStart?: () => void;
  onDataReady?: () => void;
  onDataFailed?: () => void;
  onLoadedImages?: () => void;
  onDOMLoaded?: () => void;
  onDestroy?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = "100%",
  height = "100%",
  className,
  loop = true,
  autoplay = true,
  speed,
  direction,
  style,
  initialSegment,
  onComplete,
  onLoopComplete,
  onEnterFrame,
  onSegmentStart,
  onDataReady,
  onDataFailed,
  onLoadedImages,
  onDOMLoaded,
  onDestroy,
}) => {
  const lottieRef: LottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (speed !== undefined) {
        lottieRef.current.setSpeed(speed);
      }
      if (direction !== undefined) {
        lottieRef.current.setDirection(direction);
      }
    }
  }, [speed, direction]);

  return (
    <div className={className} style={{ width, height }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={style}
        initialSegment={initialSegment}
        onComplete={onComplete}
        onLoopComplete={onLoopComplete}
        onEnterFrame={onEnterFrame}
        onSegmentStart={onSegmentStart}
        onDataReady={onDataReady}
        onDataFailed={onDataFailed}
        onLoadedImages={onLoadedImages}
        onDOMLoaded={onDOMLoaded}
        onDestroy={onDestroy}
      />
    </div>
  );
};

export default LottieAnimation;
