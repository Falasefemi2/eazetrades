import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, SearchIcon } from "lucide-react";
import Image from "next/image";
import ukflag from "../../../public/images/UK Flag.png"
import icongirl from "../../../public/images/icongirl.png"

export default function Header() {
    return (
        <header className="bg-white p-4 shadow-sm flex justify-between items-center">
            <div className="">
                <h1 className="text-[#444444] text-2xl font-bold mb-1">Hi Shammah! Welcome back</h1>
                <h3 className="text-[#444444] text-sm font-normal">Last login: Jan 01, 1970 12:00 AM</h3>
            </div>
            <div className="flex items-center space-x-4">
                <SearchIcon className="text-gray-500 cursor-pointer" />
                <Bell className="text-gray-500 cursor-pointer" />
                <div className="flex items-center">
                    <Image src={ukflag} alt="Flag" width={24} height={24} className="mr-2" />
                    <span className="text-sm text-gray-600 mr-1">English</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex items-center">
                    <Image src={icongirl} alt="User Avatar" width={32} height={32} className="rounded-full mr-2" />
                    <span className="text-sm text-gray-600 mr-1">Shammah</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
            </div>
        </header>
    )
}