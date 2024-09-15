'use client';
import Image from "next/image";
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Products', path: '/dashboard/product' },
    { name: 'Services', path: '/dashboard/services' },
    { name: 'About', path: '/dashboard/about' },
    { name: 'Order List', path: '/dashboard/orders' },
    { name: 'Delete Password', path: '/dashboard/delete-password' },
    { name: 'Delete Account', path: '/dashboard/delete-account' },
    { name: 'Support/Help', path: '/dashboard/support' },
    { name: 'Log out', path: '/logout' }
];


export default function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            <aside className="w-64 bg-white p-6 shadow-md">
                <div className="flex items-center mb-8">
                    <Image src={logo} alt="EAZETRADES Logo" width={32} height={32} className="mr-2" />
                    <span className="text-xl font-bold text-purple-600">EAZETRADES</span>
                </div>
                <nav>
                    <ul className="space-y-2">
                        {NavItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    className={`block py-2 px-4 rounded ${pathname === item.path ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}