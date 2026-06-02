import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Birthday Exhibition",
  description: "A one-day exhibition celebrating an extraordinary person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased bg-background text-foreground dark`}
    >
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-gold/30 selection:text-gold">
        {children}
      </body>
    </html>
  );
}
