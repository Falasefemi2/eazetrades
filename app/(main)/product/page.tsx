

import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import arrow from "../../../public/images/simple-line-icons_arrow-left.png"
import Image from "next/image";
import FilterDropdown from "../../components/FilterDropdown";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

interface ProductImage {
    id: number;
    product_id: string;
    product_images: string; // Note: the API returns 'product_images' not 'product_image'
}

interface ProductDetail {
    id: number;
    product_id: string;
    product_ad_id: string;
    product_name: string;
    product_category: string;
    product_price: string;
    product_image: string;
    product_ad_type: string;
    product_no_of_clicks: string;
    product_short_description: string;
    product_long_description: string;
    product_features: string;
}

interface ProductApiResponse {
    status: string;
    message: string;
    validation: boolean;
    result: {
        productDetails: ProductDetail[];
        productImages: ProductImage[];
        productComments: any[];
    };
}

async function getProduct(): Promise<{ product: ProductApiResponse | null; error: string | null }> {
    try {
        const res = await fetch(
            'https://api.eazetrades.ng/api/product/description/1',
            {
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            throw new Error('Failed to fetch product');
        }

        const data: ProductApiResponse = await res.json();
        console.log('Product Description:', data);
        return { product: data, error: null };
    } catch (error) {
        console.error('Error fetching product:', error);
        return { product: null, error: 'Failed to fetch product' };
    }
}




export default async function Product() {
    const { product, error } = await getProduct();
    const productDetails = product?.result.productDetails[0];
    const productImages = product?.result.productImages;
    console.log({ productDetails, productImages });




    // return (
    //     <main className="pt-20 md:pt-52 px-4 md:px-[50px]">
    //         <Breadcrumb>
    //             <BreadcrumbList>
    //                 <BreadcrumbItem>
    //                     <BreadcrumbLink asChild>
    //                         <Link href="/" className="text-[#696969]">Main Page</Link>
    //                     </BreadcrumbLink>
    //                 </BreadcrumbItem>
    //                 <BreadcrumbSeparator />
    //                 <BreadcrumbSeparator />
    //                 <BreadcrumbItem>
    //                     <BreadcrumbLink asChild>
    //                         <Link href="/" className="text-[#696969]">Category</Link>
    //                     </BreadcrumbLink>
    //                 </BreadcrumbItem>
    //                 <BreadcrumbSeparator />
    //                 <BreadcrumbSeparator />
    //                 <BreadcrumbItem>
    //                     <BreadcrumbLink asChild>
    //                         <Link href="/" className="text-[#696969]">Fashion</Link>
    //                     </BreadcrumbLink>
    //                 </BreadcrumbItem>
    //             </BreadcrumbList>
    //         </Breadcrumb>


    //         <div className="flex items-center justify-between mt-4">
    //             <h1 className="text-[#333333] font-medium text-3xl">Fashion</h1>
    //             <FilterDropdown />
    //         </div>

    //         <div className="mt-4">
    //             <ProductCard />
    //         </div>

    //         <div className=" mt-14 flex items-center justify-center">
    //             <ProductPagination />
    //         </div>
    //     </main>
    // )
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
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="text-[#696969]">Category</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
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
                {error ? (
                    <div className="text-red-500 text-center">{error}</div>
                ) : productDetails ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            {productImages && productImages.length > 0 ? (
                                <div className="aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src={productImages[0].product_images || '/placeholder.jpg'} // Use fallback image
                                        alt={productDetails.product_name}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                        priority // Load the first image immediately
                                    />
                                </div>
                            ) : (
                                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">No image available</span>
                                </div>
                            )}

                            {/* Thumbnail Gallery */}
                            {productImages && productImages.length > 1 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {productImages.map((image, index) => (
                                        <div key={image.id} className="aspect-square rounded-md overflow-hidden">
                                            <Image
                                                src={image.product_images || '/placeholder.jpg'} // Use fallback image
                                                alt={`${productDetails.product_name} ${index + 1}`}
                                                width={120}
                                                height={120}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-medium">{productDetails.product_name}</h2>
                                <p className="mt-2 text-3xl font-bold">₦{productDetails.product_price}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Description</h3>
                                <p className="text-gray-600">{productDetails.product_long_description}</p>
                            </div>

                            {productDetails.product_features && (
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Features</h3>
                                    <p className="text-gray-600">{productDetails.product_features}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>


            <div className="mt-14 flex items-center justify-center">
                <ProductPagination />
            </div>
        </main>
    );

}