import { Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import flag from "../../../../public/images/UK Flag.png"
import girl from "../../../../public/images/girl.png"

export default function AdminHeader() {
    return (
        <header className="border-b w-full">
            <div className="container flex h-14 items-center justify-between gap-4">
                <Link href="/admin" className="font-medium">
                    Administrator
                </Link>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" aria-label="Search">
                        <Search className="h-4 w-4" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="gap-2">
                                <Image
                                    src={flag}
                                    alt="English"
                                    className="rounded"
                                    width={20}
                                    height={15}
                                />
                                English
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>Spanish</DropdownMenuItem>
                            <DropdownMenuItem>French</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="flex items-center gap-2">
                        <Image
                            src={girl}
                            alt="Profile picture"
                            className="rounded-full"
                            width={32}
                            height={32}
                        />
                        <div className="hidden sm:grid">
                            <div className="font-medium">Shaumiah Roy</div>
                            <div className="text-xs text-muted-foreground">
                                Last login: Jan 04, 1970, 12:00 AM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}