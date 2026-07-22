import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "NineX",
  description: "NineX E-Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${space.variable} bg-[#07070A] text-white antialiased overflow-x-hidden`}
      >
        {/* Loading */}
        <LoadingScreen />

        {/* Fundo animado */}
        <AnimatedBackground />

        {/* Glow do cursor */}
        <CursorGlow />

        {/* Conteúdo */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}