import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finio AI",
  description:
    "FinioAI is an AI-powered platform to revolutionize how you manage and automate your finances. Stay tuned for something smart, secure, and fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-hostGrotesk"
      >
        {children}
      </body>
    </html>
  );
}
