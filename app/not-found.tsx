/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Home, Search, HelpCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:px-20">
                <h1 className="text-4xl font-bold sm:text-6xl">404</h1>
                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Page Not Found</h2>
                <p className="mt-4 max-w-xs text-muted-foreground sm:text-lg">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button asChild>
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/product">
                            <Search className="mr-2 h-4 w-4" />
                            Search our site
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/help">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Visit Help Center
                        </Link>
                    </Button>
                </div>
            </main>
            <footer className="w-full py-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </footer>
        </div>
    )
}

