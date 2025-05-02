// "strict";
// import clsx from "clsx";
// import { PauseCircle, PlayCircle } from "iconsax-react";
// import { useEffect, useRef, useState } from "react";
// import videojs from "video.js";
// import Player from "video.js/dist/types/player";
// import "video.js/dist/video-js.css";
// import "./Video.css";
// interface VideoPlayerProps {
//     src: string;
//     className?: string;
//     play?: boolean;
//     onPause: () => void;
//     onPlay: () => void;
//     loop?: boolean;
//     autoPlay?: boolean;
//     playButtonSize?: number;
//     isVideoAutoPlay?: boolean;
//     thumbnail?: string;
//     controls?: boolean;
// }

// function stopAllVideos() {
//     const videos: HTMLVideoElement[] = Array.from(
//         document.querySelectorAll("video")
//     );
//     // console.log("all videos:::", videos);
//     try {
//         if (videos.length > 0) videos.pop();
//         for (let i = 0; i < videos.length; i++) {
//             videos[i]?.pause();
//         }
//     } catch {
//         // console.log("error::");
//     }
// }

// const VideoPlayer = ({
//     src,
//     className,
//     play,
//     onPause,
//     onPlay,
//     loop,
//     autoPlay = true,
//     playButtonSize = 60,
//     isVideoAutoPlay,
//     thumbnail,
//     controls = true,
// }: VideoPlayerProps) => {
//     const videoRef = useRef<HTMLVideoElement | null>(null);
//     const playerRef = useRef<Player | null>(null);
//     const observerRef = useRef<IntersectionObserver | null>(null);

//     const [opacity, setOpacity] = useState(1);
//     const handleToggle = () => {
//         if (playerRef.current) {
//             if (playerRef.current.paused()) {
//                 setOpacity(0);
//                 playerRef.current.play();
//             } else {
//                 // onPause()
//                 setOpacity(0);
//                 playerRef.current.pause();
//             }
//         }
//     };

//     const count = useRef(0);
//     useEffect(() => {
//         stopAllVideos();
//         if (!videoRef.current) return;

//         // Initialize Video.js player with muted for autoplay compliance
//         playerRef.current = videojs(videoRef.current, {
//             controls: controls,
//             autoplay: autoPlay,
//             muted: false, // Required for autoplay in most browsers
//             fluid: true,
//             preload: "auto",
//             loop: loop,
//         });

//         // if (autoPlay) {
//         //     setOpacity(0)
//         //     playerRef.current.play()
//         // }
//         // console.log("new reff creating")
//         videoRef.current.onended = () => {
//             setOpacity(1);
//         };

//         const playerElement = playerRef.current.el();

//         // Set up Intersection Observer on the REplayerRef.current's container
//         observerRef.current = new IntersectionObserver(
//             ([entry]) => {
//                 if (!playerRef.current) return;

//                 if (entry.isIntersecting) {
//                     // playerRef.current?.play()?.then(() => onPlay()).catch(() => {
//                     //     console.warn("Autoplay failed");
//                     // });
//                 } else {
//                     playerRef.current.pause();
//                     onPause();
//                 }
//             },
//             { threshold: 0.3 }
//         );

//         observerRef.current.observe(playerElement);

//         return () => {
//             // Cleanup observer and player
//             observerRef.current?.disconnect();
//             if (playerRef.current) {
//                 // // console.log("discposee", count)
//                 // if (count.current == 1)
//                 //     playerRef.current.dispose();
//                 // else {
//                 //     count.current = 1;
//                 // }

//                 playerRef.current = null;
//             }
//         };
//     }, [src]);

//     // Sync with play/pause prop changes
//     useEffect(() => {
//         if (!playerRef.current) return;
//         if (play) {
//             setOpacity(0);
//         }
//         play ? playerRef.current.play() : playerRef.current.pause();
//         return () => {
//             if (playerRef.current) playerRef.current.pause();
//         };
//     }, [play]);

//     return (
//         <div data-vjs-player>
//             {/* Video.js container for proper styling */}
//             {opacity == 1 && (
//                 <div
//                     className={clsx(
//                         " absolute inset-0 bottom-6  flex flex-1 items-center justify-center z-20 cursor-pointer transition-all duration-300 "
//                     )}
//                     onClick={handleToggle}
//                     style={{ opacity: opacity }}
//                     //  style={playBtnProps.style}
//                 >
//                     <div className="mt-6">
//                         {play ? (
//                             <PauseCircle
//                                 size={playButtonSize}
//                                 color={"#FFFFFF"}
//                                 variant="Bold"
//                             />
//                         ) : (
//                             <PlayCircle
//                                 size={playButtonSize}
//                                 color={"#FFFFFF"}
//                                 variant="Bold"
//                             />
//                         )}
//                     </div>
//                 </div>
//             )}

//             <video
//                 ref={videoRef}
//                 className={`video-js !h-full ${className} `}
//                 data-setup="{}"
//                 onPause={() => {
//                     onPause();
//                 }}
//                 poster={thumbnail}
//                 // onPlay={() => { onPlay() }}
//             >
//                 {/* CSS Styling */}

//                 <source src={src} type="video/mp4" />
//             </video>
//         </div>
//     );
// };

// export default VideoPlayer;
