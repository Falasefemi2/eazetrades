import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import type { Metadata } from "next";

// Define your metadata for the Auth page
export const metadata: Metadata = {
    title: "EazeTrades", // Title for the authentication page
    description: "Join EazeTrades Hub to buy and sell goods effortlessly. Securely log in to your account or cre ate a new one to start trading today!",
    keywords: "login, register, authentication, buy and sell, EazeTrades", // Optional: keywords for SEO
    robots: "index, follow", // Optional: directives for search engine crawlers
};


export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}