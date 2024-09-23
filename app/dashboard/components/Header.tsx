import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, Search, SearchIcon } from "lucide-react";
import Image from "next/image";
import ukflag from "../../../public/images/UK Flag.png"
import icongirl from "../../../public/images/icongirl.png"

export default function Header() {
    return (
        <header className="bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex-grow mb-4 sm:mb-0">
                    <h1 className="text-[#444444] text-2xl font-bold mb-1">Hi Shammah! Welcome back</h1>
                    <h3 className="text-[#444444] text-sm font-normal">Last login: Jan 01, 1970 12:00 AM</h3>
                </div>
                <div className="flex items-center">
                    <div className="hidden sm:flex items-center space-x-4">
                        <Search className="text-gray-500 cursor-pointer" />
                        <Bell className="text-gray-500 cursor-pointer" />
                        <div className="flex items-center">
                            <Image src={ukflag} alt="Flag" width={24} height={24} className="mr-2" />
                            <span className="text-sm text-gray-600 mr-1">English</span>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>
                    <Image src={icongirl} alt="User Avatar" width={50} height={50} className="rounded-full" />
                    <p className="hidden md:block">Shammah</p>
                </div>
            </div>
        </header>
    )
}