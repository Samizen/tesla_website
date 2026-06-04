import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const astaSans = localFont({
  src: [
    {
      path: "../../assets/font/Asta_Sans/static/AstaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/font/Asta_Sans/static/AstaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/font/Asta_Sans/static/AstaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/font/Asta_Sans/static/AstaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/font/Asta_Sans/static/AstaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
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
