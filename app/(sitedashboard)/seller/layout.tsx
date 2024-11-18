import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SellerSidebar from "./components/SellerSidebar"
import SellerHeader from "./components/SellerHeader"


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