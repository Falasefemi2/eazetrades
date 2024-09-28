/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rHVHmitGX7o
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

interface SearchTestProps {
    className?: string;
}

export default function SearchTest({ className = '' }: SearchTestProps) {
    return (
        <div className={`relative w-96 h-12 ${className}`}>
            <Input
                type="search"
                placeholder="Search"
                className="w-full h-full rounded-full pl-12 pr-4 text-base border border-muted focus:border-primary focus:ring-primary"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
        </div>
    )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}