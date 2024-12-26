"use client";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import React from 'react';




interface SearchBarProps {
    className?: string;
}


const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
    return (
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

