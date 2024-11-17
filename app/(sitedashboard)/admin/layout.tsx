import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "./components/admin-sidebar"
import AdminHeader from "./components/admin-header"



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
