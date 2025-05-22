import type { Metadata } from "next";
import "./globals.css";

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
        className="font-host"
      >
        {children}
      </body>
    </html>
  );
}
