import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col md:flex-row h-screen overflow-hidden">
            <div className="flex-shrink-0 w-full md:w-64">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Header />
                {children}
            </div>
        </main>
    );
}
