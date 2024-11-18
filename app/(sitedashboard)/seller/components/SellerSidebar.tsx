"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import logo from "../../../../public/images/eazetrades-logo-3 3.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingCart, Wrench, Info, ClipboardList, MessageSquare, Lock, Trash2, HelpCircle, LogOut, Wallet } from 'lucide-react'

type NavItem = {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
    { title: "Dashboard", href: "/seller", icon: LayoutDashboard },
    { title: "Products", href: "/seller/products", icon: ShoppingCart },
    { title: "Services", href: "/seller/services", icon: Wrench },
    { title: "About", href: "/seller/about", icon: Info },
    { title: "Order List", href: "/seller/orders", icon: ClipboardList },
    { title: "Messages", href: "/seller/messages", icon: MessageSquare },
    { title: "Change Password", href: "/seller/change-password", icon: Lock },
    { title: "Delete Account", href: "/seller/delete-account", icon: Trash2 },
    { title: "Support/Help", href: "/seller/support", icon: HelpCircle },
    { title: "Log out", href: "/seller/logout", icon: LogOut },
]


export default function SellerSidebar() {
    const pathname = usePathname()
    return (
        <div className="bg-[#F8F7FD] min-h-screen">
            <Sidebar className="border-r-0">
                <SidebarHeader className="p-4">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="logo" className="w-8 h-8" />
                        <h2 className="text-xl font-bold text-[#4F4F4F]">EAZETRADES</h2>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <ul className="space-y-1">
                                        {navItems.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                                                        pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
                                                    )}
                                                >
                                                    <item.icon className="h-4 w-4" />
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </SidebarContent>
                <SidebarFooter>
                    <div className="p-4">
                        <div className="rounded-lg bg-[#5F3AFB] p-8 text-sm text-primary-foreground">
                            <div className="mb-2 flex items-center gap-2">
                                <Wallet className="h-4 w-4" />
                                <span className="font-semibold text-white">Earn as You Spend!</span>
                            </div>
                            <p className="text-xs opacity-90 text-white">Get 1% cashback on all business expenses with your Eazin Business Card</p>
                        </div>
                    </div>
                </SidebarFooter>
            </Sidebar>
        </div>
    )
}