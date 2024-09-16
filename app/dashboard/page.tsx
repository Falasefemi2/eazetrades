import SalesChart from "./components/SalesChart";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";

export default function DashboardPage() {
    return (
        <main>
            <div className="p-6">
                <StatCard />
                <SalesChart />
            </div>
        </main>
    )
}