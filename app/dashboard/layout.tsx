import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
                <Header />
                {children}
            </div>
        </main>
    )
}