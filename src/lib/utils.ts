import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

export const countries = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+1", name: "Canada", flag: "🇨🇦" },
    { code: "+1", name: "Dominican Republic", flag: "🇩🇴" },
    { code: "+20", name: "Egypt", flag: "🇪🇬" },
    { code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+34", name: "Spain", flag: "🇪🇸" },
    { code: "+39", name: "Italy", flag: "🇮🇹" },
    { code: "+41", name: "Switzerland", flag: "🇨🇭" },
    { code: "+43", name: "Austria", flag: "🇦🇹" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+45", name: "Denmark", flag: "🇩🇰" },
    { code: "+46", name: "Sweden", flag: "🇸🇪" },
    { code: "+47", name: "Norway", flag: "🇳🇴" },
    { code: "+48", name: "Poland", flag: "🇵🇱" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+52", name: "Mexico", flag: "🇲🇽" },
    { code: "+53", name: "Cuba", flag: "🇨🇺" },
    { code: "+54", name: "Argentina", flag: "🇦🇷" },
    { code: "+55", name: "Brazil", flag: "🇧🇷" },
    { code: "+56", name: "Chile", flag: "🇨🇱" },
    { code: "+57", name: "Colombia", flag: "🇨🇴" },
    { code: "+59", name: "Barbados", flag: "🇧🇧" },
    { code: "+62", name: "Indonesia", flag: "🇮🇩" },
    { code: "+64", name: "New Zealand", flag: "🇳🇿" },
    { code: "+65", name: "Singapore", flag: "🇸🇬" },
    { code: "+66", name: "Thailand", flag: "🇹🇭" },
    { code: "+68", name: "French Polynesia", flag: "🇵🇫" },
    { code: "+69", name: "Samoa", flag: "🇼🇸" },
    { code: "+7", name: "Russia", flag: "🇷🇺" },
    { code: "+79", name: "Kazakhstan", flag: "🇰🇿" },
    { code: "+82", name: "South Korea", flag: "🇰🇷" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+95", name: "Myanmar", flag: "🇲🇲" },
    { code: "+98", name: "Iran", flag: "🇮🇷" },
    { code: "+234", name: "Nigeria", flag: "🇳🇬" },
    { code: "+243", name: "Democratic Republic of the Congo", flag: "🇨🇩" },
    { code: "+220", name: "Gambia", flag: "🇬🇲" },
    { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
    { code: "+227", name: "Niger", flag: "🇳🇪" },
    { code: "+254", name: "Kenya", flag: "🇰🇪" },
    { code: "+260", name: "Zambia", flag: "🇿🇲" },
    { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
    { code: "+271", name: "South Africa", flag: "🇿🇦" },
    { code: "+272", name: "Seychelles", flag: "🇸🇨" },
    { code: "+280", name: "New Zealand", flag: "🇳🇿" },
    { code: "+281", name: "Botswana", flag: "🇧🇼" },
    { code: "+291", name: "Sudan", flag: "🇸🇩" },
    { code: "+301", name: "Australia", flag: "🇦🇺" },
];

export const base64ToWavFile = (
    base64String: string,
    fileName: string = "audio.wav"
): File | null => {
    try {
        // Ensure it's a valid Base64 string
        if (!base64String.includes("base64,")) {
            throw new Error("Invalid Base64 format");
        }

        // Remove the metadata prefix (e.g., "data:audio/wav;base64,")
        const cleanBase64 = base64String.split(",")[1] ?? base64String;

        // Remove spaces and newlines
        const sanitizedBase64 = cleanBase64.replace(/\s/g, "");

        // Decode Base64 to binary string
        const binaryString = atob(sanitizedBase64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Convert to File object
        return new File([bytes], fileName, { type: "audio/wav" });
    } catch (error) {
        console.error("Error converting Base64 to WAV:", error);
        return null;
    }
};

export const secondsToMinutesAndSeconds = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const handleLogout = () => {
    localStorage.clear();
    const page = window.location.pathname;
    window.location.href = `/login?redirect=${page}`;
};

export const colorTransparency = {
    10: '1A',
    20: '33',
    30: '4D',
    40: '66',
    50: '80',
    60: '99',
    70: 'B3',
    80: 'CC',
    90: 'E6',
    100: 'FF',
}

export function isValidWorkEmail(email: string): boolean {
  // Basic email format regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return false; // Invalid email format
  }

  // Block gmail.com domain
  const domain = email.split("@")[1].toLowerCase();
  return domain !== "gmail.com";
}
