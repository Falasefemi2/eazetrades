'use client';
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
    const pathname = usePathname();

    return (
        <>
            <aside className="w-64 bg-white p-6 shadow-md flex flex-col">
                <div className="flex items-center mb-8">
                    <Image src={logo} alt="EAZETRADES Logo" width={32} height={32} className="mr-2" />
                    <span className="text-xl font-bold text-purple-600">EAZETRADES</span>
                </div>
                <nav className="flex-grow">
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
            </aside>
        </>
    )
}