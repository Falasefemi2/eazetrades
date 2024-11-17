import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import AnalyticCard from "./components/admin-analtyic-card";
import AdminTable from "./components/admin-product";

export default function Page() {
    const cards = [
        { title: "Total Visitors", value: "7,103" },
        { title: "Total Sales", value: "3,204" },
        { title: "Total Revenue", value: "$12,405" },
        { title: "Active Users", value: "1,892" }
    ];
    return (
        <div className="p-8">
            <div className="flex flex-row md:grid md:grid-cols-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-4 snap-x">
                {cards.map((card, index) => (
                    <div key={index} className="snap-start flex-none md:flex-auto">
                        <Card className="w-[257px] md:w-auto bg-white">
                            <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
                                <Avatar>
                                    <AvatarImage src="https://github.com/falasefemi2" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <CardTitle className="text-[#667085] text-lg">{card.title}</CardTitle>
                                    <CardDescription className="text-black">{card.value}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="pt-8">
                <AnalyticCard />
            </div>

            <div>
                <AdminTable />
            </div>
        </div>
    )
}






