"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import localFont from 'next/font/local';
import React from 'react';

const lexendDeca = localFont({ src: '../../public/fonts/LexendDeca-Regular.ttf' });

interface SearchBarProps {
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
    return (
        <div className={`relative ${className}`}>
            <Input
                placeholder="Search for product"
                className={`${lexendDeca.className} text-[17px] pl-10 w-[342px] h-[47px] text-[#4F4F4F] rounded-[20px] focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#FFFFFF]`}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-4 w-4 text-[#4F4F4F]" />
            </div>
        </div>
    );
}

export default SearchBar;
