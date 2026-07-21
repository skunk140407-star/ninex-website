import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "NineX",
  description: "Equipe Competitiva de FiveM",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={space.variable}>{children}</body>
    </html>
  );
}