import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Grimm & Lechner Dachdeckermeister",
  description:
    "Dachdeckermeister aus Bamberg für Sanierung, Blecharbeiten, Dachfenster und Wartung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth antialiased">
      <body
        className={`${inter.variable} ${workSans.variable} min-h-full bg-[radial-gradient(circle_at_14%_0%,rgba(224,227,229,0.7),transparent_44%),linear-gradient(180deg,#f7fafc,#f1f4f6)] [font-family:var(--font-inter)] text-[color:var(--color-foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
