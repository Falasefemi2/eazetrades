import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

interface Product {
    id: string
    name: string
    amount?: string
    status: "Approved" | "Denied" | "Rejected" | "Pending"
}

interface ProductTableProps {
    title: string
    data: Product[]
    showAmount?: boolean
}

function StatusBadge({ status }: { status: Product["status"] }) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                {
                    "bg-green-50 text-green-700": status === "Approved",
                    "bg-red-50 text-red-700": status === "Denied" || status === "Rejected",
                    "bg-purple-50 text-purple-700": status === "Pending",
                }
            )}
        >
            {status}
        </span>
    )
}

function ProductTable({ title, data, showAmount = true }: ProductTableProps) {
    return (
        <div className="rounded-lg border bg-white">
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-[#444444]">{title}</h2>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-24">Item ID</TableHead>
                        <TableHead>Product name</TableHead>
                        {showAmount && <TableHead>Amount</TableHead>}
                        <TableHead>Status</TableHead>
                        <TableHead className="w-24">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            {showAmount && <TableCell>{item.amount}</TableCell>}
                            <TableCell>
                                <StatusBadge status={item.status} />
                            </TableCell>
                            <TableCell>
                                <button className="text-sm text-muted-foreground hover:text-primary">
                                    •••
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default function AdminTable() {
    const products = [
        { id: "001", name: "Apparel", amount: "₦1,000", status: "Approved" as const },
        { id: "002", name: "Apparel", amount: "₦1,500", status: "Denied" as const },
        { id: "003", name: "Electronics", amount: "₦5,000", status: "Approved" as const },
        { id: "004", name: "Electronics", amount: "₦3,500", status: "Approved" as const },
        { id: "005", name: "Electronics", amount: "₦2,000", status: "Rejected" as const },
    ]

    const services = [
        { id: "001", name: "Apparel", amount: "₦1,000", status: "Approved" as const },
        { id: "002", name: "Apparel", amount: "₦1,500", status: "Denied" as const },
        { id: "003", name: "Electronics", amount: "₦5,000", status: "Approved" as const },
        { id: "004", name: "Electronics", amount: "₦3,500", status: "Approved" as const },
        { id: "005", name: "Electronics", amount: "₦2,000", status: "Rejected" as const },
    ]

    const premiumAdverts = [
        { id: "001", name: "Apparel", status: "Approved" as const },
        { id: "002", name: "Apparel", status: "Denied" as const },
        { id: "003", name: "Electronics", status: "Approved" as const },
        { id: "004", name: "Electronics", status: "Approved" as const },
        { id: "005", name: "Electronics", status: "Pending" as const },
    ]

    const vipAdverts = [
        { id: "001", name: "Apparel", status: "Approved" as const },
        { id: "002", name: "Apparel", status: "Denied" as const },
        { id: "003", name: "Electronics", status: "Approved" as const },
        { id: "004", name: "Electronics", status: "Approved" as const },
        { id: "005", name: "Electronics", status: "Pending" as const },
    ]

    return (
        <div className="grid gap-6 p-4 md:grid-cols-2">
            <ProductTable title="Products" data={products} />
            <ProductTable title="Services" data={services} />
            <ProductTable title="Premium Product Adverts" data={premiumAdverts} showAmount={false} />
            <ProductTable title="Vip Product Adverts" data={vipAdverts} showAmount={false} />
        </div>
    )
}