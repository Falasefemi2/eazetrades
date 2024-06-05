"use cleint";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"


const SearchBar = () => {
    return (
        <div className="relative">
            <Input
                placeholder="Search for product"
                className="pl-10 w-[342px] h-[47px] text-[#4F4F4F] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#FFFFFF]"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-4 w-4 text-[#4F4F4F]" />
            </div>
        </div>
    );
}

export default SearchBar;
