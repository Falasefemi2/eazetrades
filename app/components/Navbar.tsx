import localFont from 'next/font/local'
import SearchBar from './Search';
import { NavigationMenuDemo } from './NavMenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from "../../public/images/eazetrades-logo-3 3.png"
import Container from './Container';
import MobileNav from './MobileNavbar';
import Link from 'next/link';
import SearchTest from './SearchTest';



const btnfont = localFont({ src: '../../public/fonts/AnekBangla-Medium.ttf' })
const textFont = localFont({ src: '../../public/fonts/AnekBangla_SemiCondensed-SemiBold.ttf' })



const Navbar = () => {
    return (
        <div className="w-full fixed top-0 left-0 right-0 z-50 bg-[#EEEAFF] border-b-[5px] backdrop-blur-sm">
            <Container>
                <header className="w-full flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center">
                        <Image src={logo} width={29.17} height={35} alt="logo" className="mr-2 w-auto h-6 sm:h-8 md:h-9" priority />
                        <span className={`${textFont.className} text-xl sm:text-2xl font-semibold text-[#4F4F4F] hidden sm:block`}>
                            EAZETRADES
                        </span>
                    </Link>
                    <div className="flex items-center justify-end flex-1 sm:flex-initial">
                        <div className="hidden lg:flex items-center space-x-6">
                            <SearchTest />
                            <NavigationMenuDemo />
                            <Button size="default" className={`${btnfont.className} text-base sm:text-lg lg:text-xl`}>
                                Get Started
                            </Button>
                        </div>
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </header>
            </Container>
        </div>
    );
}

export default Navbar;

