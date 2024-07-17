import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import arrow from "../../public/images/simple-line-icons_arrow-left.png"
import Image from "next/image";
import FilterDropdown from "../components/FilterDropdown";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

export default function Product() {
    return (
        <main className="pt-20 md:pt-52 px-4 md:px-[50px]">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="text-[#696969]">Main Page</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="text-[#696969]">Category</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="text-[#696969]">Fashion</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <div className="flex items-center justify-between mt-4">
                <h1 className="text-[#333333] font-medium text-3xl">Fashion</h1>
                <FilterDropdown />
            </div>

            <div className="mt-4">
                <ProductCard />
            </div>

            <div className=" mt-14 flex items-center justify-center">
                <ProductPagination />
            </div>
        </main>
    )
}