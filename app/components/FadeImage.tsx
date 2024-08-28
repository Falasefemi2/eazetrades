import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import heroImage from '../../public/images/hero.jpg';

const images = [heroImage, heroImage];

export default function Component() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 1 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[600px] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} // Reduced from 1 second to 0.3 seconds
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt={`Hero image ${currentImageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-start p-8">
                <div className="text-left max-w-2xl">
                    <motion.h1
                        className="text-[32px] md:text-[50px] font-bold text-[#000000] mb-4 leading-[35.2px] md:leading-[55px]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }} // Faster animation

                    >
                        Connecting <br /> sellers and buyers where <br /> convenience <br /> meet innovation
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-[#000000] mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }} // Faster animation

                    >
                        World’s largerst market place
                    </motion.p>
                    <motion.button
                        className="bg-[#5F3AFB] text-white py-[10px] px-[20px] w-[308px] rounded-[30px] h-[65px]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }} // Faster animation

                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
        </section>
    );
}