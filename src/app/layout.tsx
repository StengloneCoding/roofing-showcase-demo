import type { Metadata } from "next";

import "./globals.css";

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
      <body className="min-h-full bg-[color:var(--color-background)] font-sans text-[color:var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
