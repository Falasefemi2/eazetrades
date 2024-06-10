import localFont from 'next/font/local'
import SearchBar from './Search';
import { NavigationMenuDemo } from './NavMenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from "../../public/images/eazetrades-logo-3 3.png"
import Container from './Container';
import MobileNav from './MobileNavbar';


const btnfont = localFont({ src: '../../public/fonts/AnekBangla-Medium.ttf' })
const textFont = localFont({ src: '../../public/fonts/AnekBangla_SemiCondensed-SemiBold.ttf' })



const Navbar = () => {
    return (
        <Container>
            <header className="w-full flex items-center justify-between">
                <div className='flex items-center justify-center mr-[144px]'>
                    <Image src={logo} width={29.17} height={35} alt='logo' className='mr-[5px] hidden md:block' />
                    <Image src={logo} width={128.12} height={35} alt='logo' className='mr-[5px] md:hidden' />
                    <span className={`${textFont.className} text-2xl font-semibold text-[#4F4F4F]`}>EAZETRADES</span>
                </div>
                <div className="flex items-center justify-end max-w-[978px] w-full">
                    {/* Show SearchBar, NavigationMenuDemo, and Button on desktop */}
                    <div className="hidden lg:flex">
                        <SearchBar className="mr-20" />
                        <NavigationMenuDemo />
                        <Button size="default" className={`${btnfont.className} text-xl ml-20`}>Get Started</Button>
                    </div>
                    {/* Show MobileNav on mobile */}
                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </header>
        </Container>

    );
}

export default Navbar;