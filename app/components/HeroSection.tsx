"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import * as React from "react"
import Component from "./FadeImage";
// import { Component } from "./FadeImage";

const HeroSection = () => {
    return (
        <section className="w-full pt-[80px] md:pt-[150px] px-0 md:pl-[50px] h-full mx-auto relative bg-[#EEEAFF]">
            <Component />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[calc(100%-20px)] max-w-3xl md:max-w-[1175px] h-[100px] mx-auto bg-white rounded-[10px] shadow-md flex items-center justify-center">
                <div className="relative w-full px-4">
                    <Input
                        className="rounded-[30px] w-full h-[60px] px-6 pl-12 pr-[70px]"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-6 flex items-center">
                        <div className="bg-[#5F3AFB] rounded-full p-1 w-[50px] h-[50px] flex justify-center items-center">
                            <Search className="w-7 h-7 text-[#FFFFFF]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;


