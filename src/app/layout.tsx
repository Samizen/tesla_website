import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const astaSans = localFont({
  src: "../../assets/font/Asta_Sans/AstaSans-VariableFont_wght.ttf",
  weight: "400 800",
  style: "normal",
  variable: "--font-asta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tesla Engineering",
  description:
    "Remote structural engineering consulting, calculations, analysis, drafting, and review services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={astaSans.variable}>{children}</body>
    </html>
  );
}
