import ProductTable from "./components/ProductTable";
import SalesChart from "./components/SalesChart";
import StatCard from "./components/StatCard";

export default function DashboardPage() {
    return (
        <main>
            <div className="p-6">
                <StatCard />
                <SalesChart />
                <ProductTable />
            </div>
        </main>
    )
}