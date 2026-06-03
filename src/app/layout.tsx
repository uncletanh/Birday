import type { Metadata } from "next";
import { Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Có một tin nhắn chưa đọc...",
  description: "Bấm vào để xem chi tiết nhé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorant.variable} scroll-smooth antialiased bg-background text-foreground dark`}
    >
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-gold/30 selection:text-gold">
        {children}
      </body>
    </html>
  );
}
