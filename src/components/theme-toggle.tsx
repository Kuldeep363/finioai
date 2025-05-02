// "use client";

// import * as React from "react";
// // import { Moon, Sun } from "lucide-react";
// import { Moon, Sun1 } from "iconsax-react";
// import { useTheme } from "next-themes";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import ThemeToggle1 from "../components/toggle/ThemeToggle";
// // import { Switch } from "@/components/ui/switch";

// export function ThemeToggle() {
//     const { theme, setTheme } = useTheme();
//     const changeTheme = () => {
//         try {
//             setTheme((prev) => (prev === "light" ? "dark" : "light"));
//         } catch {
//             console.log("error");
//         }
//     };

//     return (
//         <div className="flex items-center space-x-2">
//             {/* <Switch
//               checked={theme === "dark"}
//               onCheckedChange={(checked) =>
//                   setTheme(checked ? "dark" : "light")
//               }
//               className="
//           data-[state=checked]:bg-slate-800 
//           data-[state=unchecked]:bg-slate-200
//           dark:data-[state=unchecked]:bg-slate-700"
//           /> */}
//             <div
//                 className="flex items-center cursor-pointer"
//                 onClick={() =>
//                     setTheme((prev) => (prev === "light" ? "dark" : "light"))
//                 }
//             >
//                 {/* {theme === "dark" ? (
//                   //   <Moon className="h-[0.9rem] w-[0.9rem] text-slate-100" />
//                   <Moon size="16" color="var(--black)" variant="Bold" />
//               ) : (
//                   //   <Sun className="h-[0.9rem] w-[0.9rem] text-slate-900" />
//                   <Sun1 size="16" color="var(--black)" variant="Bold" />
//               )} */}
//                 <DarkModeSwitch
//                     sunColor="#fefefe"
//                     checked={theme === "dark"}
//                     onChange={changeTheme}
//                     size={20}
//                 />
//             </div>
//         </div>
//     );
// }
