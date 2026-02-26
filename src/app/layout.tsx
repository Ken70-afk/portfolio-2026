import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MountainBackground from "@/components/MountainBackground";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Ranjith | Software Engineer",
  description: "Portfolio of Abhinav Ranjith, a Software Engineer experienced in building and deploying full-stack applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black min-h-screen flex`}
      >
        <Sidebar />
        <main className="flex-1 ml-64 p-8 relative">
          <MountainBackground />
          {children}
        </main>
      </body>
    </html>
  );
}
