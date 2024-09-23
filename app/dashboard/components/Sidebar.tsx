"use client"

import Image from "next/image";
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import bgblue from "../../../public/images/bluebg.png"
import dashboardicon from "../../../public/images/dashboard icon.png"
import database from "../../../public/images/Database.png"
import headphones from "../../../public/images/Headphonesicon.png"
import iconpic from "../../../public/images/Icon.png"
import list from "../../../public/images/List.png"
import c from "../../../public/images/system-uicons_notification.png"
import air from "../../../public/images/Airplay.png"
import help from "../../../public/images/Help circle.png"
import l from "../../../public/images/Line.png"
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";



const NavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: dashboardicon }, // Added icon property
    { name: 'Products', path: '/dashboard/product', icon: database }, // Added icon property
    { name: 'Services', path: '/dashboard/services', icon: headphones }, // Added icon property
    { name: 'About', path: '/dashboard/about', icon: iconpic }, // Added icon property
    { name: 'Order List', path: '/dashboard/orders', icon: list }, // Added icon property
    { name: 'Change Password', path: '/dashboard/change-password', icon: c }, // Added icon property
    { name: 'Delete Account', path: '/dashboard/delete-account', icon: air }, // Added icon property
    { name: 'Support/Help', path: '/dashboard/support', icon: help }, // Added icon property
    { name: 'Log out', path: '/logout', icon: l } // Added icon property
];



export default function Sidebar() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            <nav className="flex-grow mt-8">
                <ul className="space-y-2">
                    {NavItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.path}
                                className={`flex items-center py-2 px-4 rounded font-normal ${pathname === item.path
                                    ? 'bg-purple-100 text-purple-600'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {item.icon && (
                                    <Image
                                        src={item.icon}
                                        alt={`${item.name} icon`}
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                )}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex justify-center mt-8">
                <Image src={bgblue} width={120} height={123} alt="bg" />
            </div>
        </div>
    )

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-white shadow-md md:hidden">
                <div className="flex items-center">
                    <Image src={logo} alt="EAZETRADES Logo" width={32} height={32} className="mr-2" />
                    <span className="text-xl font-bold text-purple-600">EAZETRADES</span>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 p-0">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </header>
            <aside className="hidden md:block w-64 bg-white p-6 shadow-md">
                <div className="flex items-center mb-8">
                    <Image src={logo} alt="EAZETRADES Logo" width={32} height={32} className="mr-2" />
                    <span className="text-xl font-bold text-purple-600">EAZETRADES</span>
                </div>
                <SidebarContent />
            </aside>
        </>
    )
}