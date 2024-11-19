// "use client";

// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import localFont from 'next/font/local'
// import Footer from "./components/Footer";
// import { Toaster } from "@/components/ui/sonner"

// import { usePathname } from 'next/navigation';

// const anekBangla = localFont({ src: '../public/fonts/AnekBangla-SemiBold.ttf' })

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const isAuthPage = pathname.startsWith('/auth'); // Adjust this based on your auth route
//   const isDashboardPage = pathname.startsWith('/dashboard')
//   const newAdmin = pathname.startsWith('/admin')
//   const newSeller = pathname.startsWith('/seller')

//   return (
//     <html lang="en">
//       <body className={`${anekBangla.className} bg-[#F9F7FF]`}>
//         {!isAuthPage && !isDashboardPage && !newAdmin && !newSeller && <Navbar />}
//         <div>
//           {children}
//         </div>
//         {!isAuthPage && !isDashboardPage && !newAdmin && !newSeller && <Footer />}
//         <Toaster />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "EazeTrades", // Replace with your actual product title
  description: "Welcome to Marketplace Hub, your ultimate destination for buying and selling goods with ease! Our platform connects buyers and sellers in a vibrant community, making it simple to discover unique items and find great deals. Whether you're looking to declutter your home, hunt for vintage treasures, or shop for the latest trends, Marketplace Hub has something for everyone. With user-friendly features, secure transactions, and a diverse range of categories—from electronics and fashion to home goods and collectibles—Marketplace Hub empowers you to trade with confidence. Join our growing community today and experience the convenience of buying and selling like never before! Feel free to adjust any part of this description to better fit your brand's voice or specific offerings!Related",
};

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