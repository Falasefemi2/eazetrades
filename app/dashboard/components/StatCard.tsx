/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cardbg from "../../../public/images/cardbg.png"
import { TrendingUp } from "lucide-react";

export default function StatCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-cover bg-center rounded-3xl p-6" style={{ backgroundImage: `url(${cardbg.src})` }}>
            <Card className="bg-white p-6">
                <CardContent className="p-0 flex items-center flex-row justify-between">
                    <div className="flex flex-row gap-8">
                        <div className="w-1 h-12 bg-indigo-600 rounded"></div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 font-medium">Total Visitors</span>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold">489</span>

                                <div className="flex items-center space-x-1 mt-1">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <span className="text-xs text-green-500 font-medium">8.5% up from yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full self-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="h-6 w-6"
                        >
                            <circle cx="50" cy="50" r="50" fill="#812AE5" />
                            <g transform="translate(25, 25) scale(2)">
                                <path
                                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="9"
                                    cy="7"
                                    r="4"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </g>
                        </svg>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-white p-6">
                <CardContent className="p-0 flex items-center flex-row justify-between">
                    <div className="flex flex-row gap-8">
                        <div className="w-1 h-12 bg-indigo-600 rounded"></div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 font-medium">Total Visitors</span>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold">100</span>

                                <div className="flex items-center space-x-1 mt-1">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <span className="text-xs text-green-500 font-medium">1.3% up from past week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full self-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="h-6 w-6"
                        >
                            <circle cx="50" cy="50" r="50" fill="#812AE5" />
                            <g transform="translate(25, 25) scale(2)">
                                <path
                                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="9"
                                    cy="7"
                                    r="4"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </g>
                        </svg>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}



