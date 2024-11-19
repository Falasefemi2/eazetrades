"use client";

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');
  const isDashboardPage = pathname.startsWith('/dashboard');
  const newAdmin = pathname.startsWith('/admin');
  const newSeller = pathname.startsWith('/seller');

  return (
    <>
      {!isAuthPage && !isDashboardPage && !newAdmin && !newSeller && <Navbar />}
      <div>{children}</div>
      {!isAuthPage && !isDashboardPage && !newAdmin && !newSeller && <Footer />}
    </>
  );
}
