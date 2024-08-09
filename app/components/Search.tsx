"use client";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import localFont from 'next/font/local';
import React from 'react';

const lexendDeca = localFont({ src: '../../public/fonts/LexendDeca-Regular.ttf' });

interface SearchBarProps {
    className?: string;
}


const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
    return (
        // <div className={`relative ${className}`}>
        //     <Input
        //         placeholder="Search for product"
        //         className={`${lexendDeca.className} text-[17px] pl-12 w-72 h-[40px] text-[#4F4F4F] rounded-[20px] focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#FFFFFF] pt-[1rem] pb-[0.75rem]`}
        //     />
        //     <div className="absolute inset-y-0 left-3 pl-3 flex items-center">
        //         <Search className="h-[23px] w-[23px] text-[#4F4F4F]" />
        //     </div>
        // </div>
        <div className="relative w-full max-w-md">
            <Input
                type="search"
                placeholder="Search for product"
                className="w-full rounded-full pl-10 pr-4 py-2 text-sm border border-muted focus:border-primary focus:ring-primary"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
        </div>
    );
}

export default SearchBar;

