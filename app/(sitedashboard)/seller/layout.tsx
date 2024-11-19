import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SellerSidebar from "./components/SellerSidebar"
import SellerHeader from "./components/SellerHeader"

// Define your metadata for the Auth page
export const metadata: Metadata = {
    title: "Seller Dashboard  - EazeTrades", // Title for the authentication page
    description: "Join EazeTrades Hub to buy and sell goods effortlessly. Securely log in to your account or cre ate a new one to start trading today!",
    keywords: "login, register, authentication, buy and sell, EazeTrades", // Optional: keywords for SEO
    robots: "index, follow", // Optional: directives for search engine crawlers
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SellerSidebar />
            <main className="w-full">
                <div className="w-full flex items-center">
                    <SidebarTrigger />
                    <SellerHeader />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}