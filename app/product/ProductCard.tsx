import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react";
import stool from "../../public/images/stool.png"
import bootle from "../../public/images/bottle.png"
import crocs from "../../public/images/crocs.png"
import watch from "../../public/images/watch.png"
import headphone from "../../public/images/headphone.png"
import speaker from "../../public/images/speaker.png"
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import location from "../../public/images/location.png"


const pics = [stool, bootle, crocs, watch, headphone, speaker]


const ProductCard = () => {
    return (
        <>
            <div className="flex items-center gap-2 flex-wrap mb-4">
                {['Shoes', 'Male', 'Sneakers', 'Size 45'].map((item, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="flex items-center gap-1 bg-[#F2F2F2] py-2 px-4 rounded-none m-1 text-lg"
                    >
                        {item}
                        <X size={14} className="cursor-pointer" />
                    </Badge>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                {pics.map((p, i) => (
                    // <Card className="bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[45px]" key={i}>
                    //     <div className="p-2 sm:p-4 relative">
                    //         <div className="absolute top-12 right-8  z-10 bg-white text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                    //             Premium Ad
                    //         </div>
                    //         <Image
                    //             src={p}
                    //             width={600}
                    //             height={400}
                    //             alt={`PIC ${i + 1}`}
                    //             className="w-full aspect-[3/2] object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[45px]"
                    //         />
                    //     </div>
                    //     <div className="p-2 sm:p-4 space-y-2">
                    //         <div className="flex items-center justify-between">
                    //             <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                    //             <div className="text-base lg:text-2xl font-bold text-[#000000]">₦20,000</div>
                    //         </div>
                    //         <div>
                    //             <p className="text-[#000000] font-bold text-lg lg:text-xl">High Quality Crocs</p>
                    //         </div>
                    //         <div className="bg-[#F0F0F0] rounded-[20px] p-2 sm:p-4">
                    //             <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                    //                 {/* <LocateIcon className="w-4 h-4" /> */}
                    //                 <Image src={location} alt="location" />
                    //                 Lagos, Ikeja
                    //             </div>
                    //             <div className="flex items-center justify-between">
                    //                 <p className="text-sm text-black">16 visits</p>
                    //                 <Button size="md" className="rounded-full text-base md:text-sm lg:text-xs hidden lg:block">Preview</Button>
                    //                 <Button size="sm" className="rounded-full text-base md:text-sm lg:text-xs lg:hidden block">Preview</Button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </Card>
                    <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px]" key={i}>
                        <div className="relative p-4">
                            {/* Badge for Premium Ad */}
                            <div className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                Premium Ad
                            </div>

                            <Image
                                src={p}
                                width={600}
                                height={400}
                                alt={`PIC ${i + 1}`}
                                className="w-full aspect-[3/2] object-cover rounded-[30px]"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                            </div>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    <Image src={location} alt="location" />
                                    Lagos, Ikeja
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-black">16 visits</p>
                                    <Button size="md" className="rounded-full text-base md:text-sm lg:text-xs">Preview</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default ProductCard;