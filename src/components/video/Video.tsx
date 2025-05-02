// "use client";
// import { IconInterface } from "@/definition";
// import clsx from "clsx";
// import {
//     PauseCircle,
//     PlayCircle,
//     VolumeCross,
//     VolumeHigh,
// } from "iconsax-react";
// import "./Video.css";

// import React, { useRef, useState, useEffect, CSSProperties } from "react";
// import Select from "../select/Select";

// interface VideoPlayerProps {
//     src: string;
//     type: string;
//     poster?: string;
//     controls?: boolean;
//     autoPlay?: boolean;
//     loop?: boolean;
//     muted?: boolean;
//     playBtnProps?: IconInterface;
//     containerClassName?: string;
//     label?: string;
//     labelClassName?: string;
//     labelStyle?: CSSProperties;
//     videoClassName?: string;
//     setAspectRatio?: React.Dispatch<React.SetStateAction<number>>
// }

// const VideoPlayer: React.FC<VideoPlayerProps> = ({
//     src,
//     type,
//     poster,
//     controls = false,
//     autoPlay = false,
//     loop = true,
//     muted = false,
//     playBtnProps = {
//         size: 16,
//         color: "#fefefe",
//         style: {
//             right: "10px",
//             bottom: "10px",
//         },
//     },
//     containerClassName,
//     label,
//     labelClassName,
//     labelStyle,
//     videoClassName,
//     setAspectRatio
// }) => {
//     const videoRef = useRef<HTMLVideoElement | null>(null);
//     const [isPlaying, setIsPlaying] = useState<boolean>(false);
//     const [isMuted, setIsMuted] = useState<boolean>(muted);
//     const [playbackRate, setPlaybackRate] = useState<number>(1);
//     const [currentTime, setCurrentTime] = useState<number>(0);
//     const [duration, setDuration] = useState<number>(0);
//     const onlyVideo = useRef<boolean>(false);
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const playedOnce = useRef<boolean>(false);

//     useEffect(() => {
//         if (videoRef.current) {
//             const video = videoRef.current;
//             video.onplay = () => setIsPlaying(true);
//             video.onpause = () => setIsPlaying(false);
//             video.ontimeupdate = () => setCurrentTime(video.currentTime);
//             video.onloadedmetadata = () => {
//                 if (setAspectRatio) {
//                     setAspectRatio(video.videoWidth / video.videoHeight);
//                 }
//                 setDuration(video.duration)
//             }
//         }
//     }, []);

//     const handlePlayPause = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 if (onlyVideo.current) onlyVideo.current = true;
//                 playedOnce.current = true;
//                 videoRef.current.play();
//             }
//         }
//     };

//     const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (videoRef.current) {
//             const seekTo = e.target.value;
//             // (videoRef.current.duration * parseFloat(e.target.value)) / 100;
//             videoRef.current.currentTime = parseFloat(seekTo);
//         }
//     };

//     const handleMuteToggle = () => {
//         if (videoRef.current) {
//             videoRef.current.muted = !isMuted;
//             setIsMuted(!isMuted);
//         }
//     };

//     const handlePlaybackRateChange = (rate: number) => {
//         if (videoRef.current) {
//             videoRef.current.playbackRate = rate;
//             setPlaybackRate(rate);
//         }
//     };

//     useEffect(() => {
//         const setControlsOn = () => {
//             onlyVideo.current = false;
//         };
//         const setControlsOff = () => {
//             onlyVideo.current = true;
//         };
//         if (containerRef.current) {
//             containerRef.current.addEventListener("mouseenter", setControlsOn);
//             containerRef.current.addEventListener("mouseleave", setControlsOff);
//             containerRef.current.addEventListener("focus", setControlsOn);
//             containerRef.current.addEventListener("blur", setControlsOff);
//         }
//         return () => {
//             if (containerRef.current) {
//                 containerRef.current.removeEventListener(
//                     "mouseenter",
//                     setControlsOn
//                 );
//                 containerRef.current.removeEventListener(
//                     "mouseleave",
//                     setControlsOff
//                 );
//                 containerRef.current.removeEventListener(
//                     "focus",
//                     setControlsOn
//                 );
//                 containerRef.current.removeEventListener(
//                     "blur",
//                     setControlsOff
//                 );
//             }
//             playedOnce.current = false;
//         };
//     }, []);

//     return (
//         <div
//             className={clsx("relative", containerClassName)}
//             ref={containerRef}
//         >
//             <video
//                 ref={videoRef}
//                 poster={poster}
//                 autoPlay={autoPlay}
//                 loop={loop}
//                 muted={isMuted}
//                 width="100%"
//                 preload="none"
//                 className={clsx("rounded-2xl", videoClassName)}
//             >
//                 <source src={src} type={type} />
//                 Your browser does not support the video tag.
//             </video>
//             <div
//                 className={clsx(
//                     "play__btn absolute z-20 cursor-pointer transition-all duration-300",
//                     {
//                         "opacity-0": onlyVideo.current,
//                     }
//                 )}
//                 onClick={handlePlayPause}
//                 style={playBtnProps.style}
//             >
//                 {isPlaying ? (
//                     <PauseCircle
//                         size={playBtnProps.size}
//                         color={playBtnProps.color}
//                         variant="Bold"
//                     />
//                 ) : (
//                     <PlayCircle
//                         size={playBtnProps.size}
//                         color={playBtnProps.color}
//                         variant="Bold"
//                     />
//                 )}
//             </div>
//             {playedOnce && controls ? (
//                 <div
//                     className={clsx(
//                         "custom-controls absolute z-10 left-2 bottom-2 w-[80%] flex gap-2 items-center  px-2 py-1 transition-all duration-300",
//                         {
//                             "opacity-0": onlyVideo.current,
//                         }
//                     )}
//                 >
//                     <input
//                         type="range"
//                         value={currentTime || 0}
//                         onChange={handleSeek}
//                         max={duration}
//                         className="video__seek"
//                     />
//                     <button onClick={handleMuteToggle}>
//                         {isMuted ? (
//                             <VolumeCross
//                                 size={16}
//                                 color="#fefefe"
//                                 variant="Bold"
//                             />
//                         ) : (
//                             <VolumeHigh
//                                 size={16}
//                                 color="#fefefe"
//                                 variant="Bold"
//                             />
//                         )}
//                     </button>
//                     <Select
//                         options={[
//                             { value: 0.5, label: "0.5x" },
//                             { value: 1, label: "1x" },
//                             { value: 1.5, label: "1.5x" },
//                             { value: 2, label: "2x" },
//                         ]}
//                         onChange={handlePlaybackRateChange}
//                     />
//                 </div>
//             ) : null}
//             {label ? (
//                 <p
//                     className={clsx(
//                         "absolute z-10 bottom-2 left-2 transition-all duration-300",
//                         {
//                             "opacity-0": onlyVideo.current,
//                         },
//                         labelClassName
//                     )}
//                     style={labelStyle}
//                 >
//                     {label}
//                 </p>
//             ) : null}
//             {/* play wrapper all over the video */}
//             <div
//                 className="absolute w-full h-full top-0 left-0 z-10"
//                 onClick={handlePlayPause}
//             />
//         </div>
//     );
// };

// export default VideoPlayer;
