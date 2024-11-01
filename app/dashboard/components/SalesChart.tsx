// import ChartMap from "./ChartMap";

// export default function SalesChart() {
//     return (
//         <>
//             <ChartMap />
//         </>
//     )
// }


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export default function Component() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Products</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item ID</TableHead>
                            <TableHead>Product name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { id: "001", name: "Apparel", amount: "₦1,000", status: "approved" },
                            { id: "002", name: "Apparel", amount: "₦1,000", status: "denied" },
                            { id: "003", name: "Electronics", amount: "₦5,000", status: "approved" },
                            { id: "004", name: "Electronics", amount: "₦5,500", status: "approved" },
                            { id: "005", name: "Electronics", amount: "₦2,000", status: "reorder" },
                        ].map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            product.status === "approved"
                                                ? "bg-green-100 text-green-600 border-green-600"
                                                : product.status === "denied"
                                                    ? "bg-red-100 text-red-600 border-red-600"
                                                    : "bg-yellow-100 text-yellow-600 border-yellow-600"
                                        }
                                    >
                                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <h2 className="text-xl font-semibold pt-6">Premium Product Adverts</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item ID</TableHead>
                            <TableHead>Product name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { id: "001", name: "Apparel", status: "approved" },
                            { id: "002", name: "Apparel", status: "denied" },
                            { id: "003", name: "Electronics", status: "approved" },
                            { id: "004", name: "Electronics", status: "approved" },
                            { id: "005", name: "Electronics", status: "pending" },
                        ].map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            product.status === "approved"
                                                ? "bg-green-100 text-green-600 border-green-600"
                                                : product.status === "denied"
                                                    ? "bg-red-100 text-red-600 border-red-600"
                                                    : "bg-purple-100 text-purple-600 border-purple-600"
                                        }
                                    >
                                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Services</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item ID</TableHead>
                            <TableHead>Product name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { id: "001", name: "Apparel", amount: "₦1,000", status: "approved" },
                            { id: "002", name: "Apparel", amount: "₦1,000", status: "denied" },
                            { id: "003", name: "Electronics", amount: "₦5,000", status: "approved" },
                            { id: "004", name: "Electronics", amount: "₦5,500", status: "approved" },
                            { id: "005", name: "Electronics", amount: "₦2,000", status: "reorder" },
                        ].map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            product.status === "approved"
                                                ? "bg-green-100 text-green-600 border-green-600"
                                                : product.status === "denied"
                                                    ? "bg-red-100 text-red-600 border-red-600"
                                                    : "bg-yellow-100 text-yellow-600 border-yellow-600"
                                        }
                                    >
                                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <h2 className="text-xl font-semibold pt-6">VIP Product Adverts</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item ID</TableHead>
                            <TableHead>Product name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { id: "001", name: "Apparel", status: "approved" },
                            { id: "002", name: "Apparel", status: "denied" },
                            { id: "003", name: "Electronics", status: "approved" },
                            { id: "004", name: "Electronics", status: "approved" },
                            { id: "005", name: "Electronics", status: "pending" },
                        ].map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            product.status === "approved"
                                                ? "bg-green-100 text-green-600 border-green-600"
                                                : product.status === "denied"
                                                    ? "bg-red-100 text-red-600 border-red-600"
                                                    : "bg-purple-100 text-purple-600 border-purple-600"
                                        }
                                    >
                                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}