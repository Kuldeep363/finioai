import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/lib/providers";

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
      <body className="font-figtree">
        <Providers>{children}</Providers>
        <Toaster />
        <div id="modal-root" />
      </body>
    </html>
  );
}
