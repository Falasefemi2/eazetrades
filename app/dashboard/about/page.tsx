import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = [
    { id: "001", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "002", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "003", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "004", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "005", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "006", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "007", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "008", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "009", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "010", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "011", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
    { id: "012", fullName: "Christine Brooks", email: "christine.brooks@gmail.com", phone: "00123723787474" },
];



export default function AboutPage() {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-2xl font-bold mb-4 text-[#333333]">About Us</h2>
            <Table className="text-[#667085]">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email Address</TableHead>
                        <TableHead>Phone Number</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="font-medium">{row.id}</TableCell>
                            <TableCell>{row.fullName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}