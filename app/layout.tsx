"use client";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from 'next/font/local'
import Footer from "./components/Footer";

import { usePathname } from 'next/navigation';

const anekBangla = localFont({ src: '../public/fonts/AnekBangla-SemiBold.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth'); // Adjust this based on your auth route
  const isDashboardPage = pathname.startsWith('/dashboard')

  return (
    <html lang="en">
      <body className={`${anekBangla.className} bg-[#F9F7FF]`}>
        {!isAuthPage && !isDashboardPage && <Navbar />}
        <div>
          {children}
        </div>
        {!isAuthPage && !isDashboardPage && <Footer />}
      </body>
    </html>
  );
}
