import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/fonts/AnekBangla-SemiBold.ttf' })




export const metadata: Metadata = {
  title: "EazeTrades",
  description: "Connect buyers and sellers to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-[#F9F7FF] max-w-[1304px] mx-auto`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
