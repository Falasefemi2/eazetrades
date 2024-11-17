import { Card, CardContent } from "@/components/ui/card"
import { ArrowDownIcon } from 'lucide-react'

export default function AnalyticCard() {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-4">
            <Card className="flex-1 bg-white">
                <CardContent className="p-6">
                    <div className="relative aspect-square">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="20"
                                className="text-muted stroke-[8]"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="20"
                                strokeDasharray="251.2"
                                strokeDashoffset="165.792"
                                className="text-primary stroke-[8]"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="black"
                                strokeWidth="20"
                                strokeDasharray="251.2"
                                strokeDashoffset="213.52"
                                className="stroke-[8]"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold">100%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="flex-1 space-y-6">
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-muted-foreground">New users</p>
                                <p className="text-2xl font-bold">400</p>
                            </div>
                            <div className="flex items-center text-xs text-red-500">
                                <ArrowDownIcon className="w-3 h-3 mr-1" />
                                vs yesterday (-0.005%)
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-muted-foreground">Return visitors</p>
                                <p className="text-2xl font-bold">3000</p>
                            </div>
                            <div className="flex items-center text-xs text-red-500">
                                <ArrowDownIcon className="w-3 h-3 mr-1" />
                                vs yesterday (-0.005%)
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-muted-foreground">Total visitors</p>
                                <p className="text-2xl font-bold">7103</p>
                            </div>
                            <div className="flex items-center text-xs text-red-500">
                                <ArrowDownIcon className="w-3 h-3 mr-1" />
                                vs yesterday (-0.005%)
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}