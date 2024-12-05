'use client'

import { LayoutDashboard, Settings, Users, Mail, Grid, Info, KeyRound, LogOut, LayoutGrid, MessageSquareMore, LucideImage, LucideIcon } from 'lucide-react'

import {
    Sidebar,
    SidebarContent,
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


const items: { title: string; url: string; icon: LucideIcon }[] = [
    {
        title: "Dashboard",
        url: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Logo",
        url: "/admin/logo",
        icon: LucideImage,
    },
    {
        title: "Product",
        url: "/admin/product",
        icon: Grid,
    },
    {
        title: "Services",
        url: "/admin/services",
        icon: Settings,
    },
    {
        title: "Advertisement",
        url: "/admin/advertisements",
        icon: MessageSquareMore,
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: Users,
    },
    {
        title: "Email List",
        url: "/admin/email",
        icon: Mail,
    },
    {
        title: "Product Categories",
        url: "/admin/categories",
        icon: LayoutGrid,
    },
    {
        title: "About Us",
        url: "/admin/about",
        icon: Info,
    },
    {
        title: "Change Password",
        url: "/admin/change-password",
        icon: KeyRound,
    },
    {
        title: "Log out",
        url: "/auth/logout",
        icon: LogOut,
    },
]
export default function AdminSidebar() {
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
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => {
                                    const isActive = pathname === item.url
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={isActive}
                                                className="hover:bg-[#F8F7FD] hover:text-[#6E62E5] data-[active=true]:bg-[#F8F7FD] data-[active=true]:text-[#6E62E5]"
                                            >
                                                <Link href={item.url} className="flex items-center gap-3">
                                                    <item.icon className="h-4 w-4" />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                </SidebarContent>
            </Sidebar>
        </div>
    )
}