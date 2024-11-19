import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/sonner"

const anekBangla = localFont({ src: '../public/fonts/AnekBangla-SemiBold.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anekBangla.className} bg-[#F9F7FF]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
