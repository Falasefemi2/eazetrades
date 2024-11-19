import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "./components/admin-sidebar"
import AdminHeader from "./components/admin-header"


// Define your metadata for the Auth page
export const metadata: Metadata = {
    title: "Admin Dashboard - EazeTrades", // Title for the authentication page
    description: "Join EazeTrades Hub to buy and sell goods effortlessly. Securely log in to your account or cre ate a new one to start trading today!",
    keywords: "login, register, authentication, buy and sell, EazeTrades", // Optional: keywords for SEO
    robots: "index, follow", // Optional: directives for search engine crawlers
};
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main className="w-full">
                <div className="w-full flex items-center">
                    <SidebarTrigger />
                    <AdminHeader />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}
